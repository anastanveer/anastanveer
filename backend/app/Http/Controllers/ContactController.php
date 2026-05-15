<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Validation\ValidationException;

class ContactController extends Controller
{
    public function __invoke(Request $request): JsonResponse
    {
        if (trim((string) $request->input('_honey')) !== '') {
            return response()->json(['success' => false], 422);
        }

        $data = $request->validate([
            'name' => ['required', 'string', 'max:120'],
            'email' => ['required', 'email:rfc,dns', 'max:180'],
            'phone' => ['nullable', 'string', 'max:80'],
            'projectType' => ['nullable', 'string', 'max:120'],
            'budget' => ['nullable', 'string', 'max:80'],
            'message' => ['required', 'string', 'min:5', 'max:5000'],
            'recaptchaToken' => ['required', 'string'],
            'source' => ['nullable', 'string', 'max:120'],
            'timestamp' => ['nullable', 'string', 'max:120'],
        ]);

        $this->verifyRecaptcha($data['recaptchaToken'], (string) $request->ip());

        $to = (string) config('services.contact.to');
        $subject = 'New Project Inquiry - anastanveer.com';
        $body = implode("\n", [
            'New project inquiry from anastanveer.com',
            '',
            'Name: '.$data['name'],
            'Email: '.$data['email'],
            'Phone / WhatsApp: '.($data['phone'] ?? 'Not provided'),
            'Project Type: '.($data['projectType'] ?? 'Not selected'),
            'Budget: '.($data['budget'] ?? 'Not selected'),
            'Source: '.($data['source'] ?? 'Website'),
            'Submitted At: '.($data['timestamp'] ?? now()->toDateTimeString()),
            'IP: '.($request->ip() ?? 'Unknown'),
            '',
            'Project Details:',
            strip_tags($data['message']),
        ]);

        try {
            Mail::raw($body, function ($mail) use ($to, $subject, $data) {
                $mail->to($to)
                    ->replyTo($data['email'], $data['name'])
                    ->subject($subject);
            });
        } catch (\Throwable $exception) {
            Log::error('Contact form mail failed', ['error' => $exception->getMessage()]);

            return response()->json(['success' => false, 'message' => 'Email could not be sent'], 500);
        }

        return response()->json(['success' => true]);
    }

    private function verifyRecaptcha(string $token, string $ip): void
    {
        $secret = (string) config('services.recaptcha.secret');

        if ($secret === '') {
            throw ValidationException::withMessages(['recaptchaToken' => 'reCAPTCHA is not configured.']);
        }

        $response = Http::asForm()
            ->timeout(8)
            ->post('https://www.google.com/recaptcha/api/siteverify', [
                'secret' => $secret,
                'response' => $token,
                'remoteip' => $ip,
            ]);

        $result = $response->json();

        if (
            ! $response->ok() ||
            empty($result['success']) ||
            ($result['action'] ?? '') !== 'contact_form' ||
            (float) ($result['score'] ?? 0) < (float) config('services.recaptcha.minimum_score')
        ) {
            throw ValidationException::withMessages(['recaptchaToken' => 'reCAPTCHA verification failed.']);
        }
    }
}
