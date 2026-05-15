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
            'name'           => ['required', 'string', 'max:120'],
            'email'          => ['required', 'email:rfc,dns', 'max:180'],
            'phone'          => ['nullable', 'string', 'max:80'],
            'projectType'    => ['nullable', 'string', 'max:120'],
            'budget'         => ['nullable', 'string', 'max:80'],
            'message'        => ['required', 'string', 'min:5', 'max:5000'],
            'recaptchaToken' => ['required', 'string'],
            'source'         => ['nullable', 'string', 'max:120'],
            'timestamp'      => ['nullable', 'string', 'max:120'],
        ]);

        $this->verifyRecaptcha($data['recaptchaToken'], (string) $request->ip());

        $adminTo      = (string) config('services.contact.to');
        $adminCc      = (string) config('services.contact.cc');
        $submittedAt  = $data['timestamp'] ?? now()->toDateTimeString();

        // ── Admin notification (plain text) ──────────────────────────────────
        $adminBody = implode("\n", [
            '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
            '  NEW PROJECT INQUIRY — anastanveer.com',
            '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
            '',
            'Name:         ' . $data['name'],
            'Email:        ' . $data['email'],
            'Phone:        ' . ($data['phone'] ?? 'Not provided'),
            'Project Type: ' . ($data['projectType'] ?? 'Not selected'),
            'Budget:       ' . ($data['budget'] ?? 'Not selected'),
            'Submitted At: ' . $submittedAt,
            'IP:           ' . ($request->ip() ?? 'Unknown'),
            '',
            '── Project Details ──────────────────────',
            '',
            strip_tags($data['message']),
            '',
            '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
            'Reply directly to this email to respond to ' . $data['name'] . '.',
        ]);

        // ── Client confirmation (HTML) ────────────────────────────────────────
        $clientHtml = $this->clientEmailHtml($data, $submittedAt);

        try {
            // Admin notification
            Mail::raw($adminBody, function ($mail) use ($adminTo, $adminCc, $data) {
                $mail->to($adminTo)
                    ->cc($adminCc)
                    ->replyTo($data['email'], $data['name'])
                    ->subject('New Project Inquiry: ' . $data['name'] . ' — anastanveer.com');
            });

            // Client auto-reply
            Mail::html($clientHtml, function ($mail) use ($data) {
                $mail->to($data['email'], $data['name'])
                    ->replyTo('info@anastanveer.com', 'Anas Tanveer')
                    ->subject("Got your inquiry — I'll be in touch within 4 hours");
            });
        } catch (\Throwable $exception) {
            Log::error('Contact form mail failed', ['error' => $exception->getMessage()]);

            return response()->json(['success' => false, 'message' => 'Email could not be sent'], 500);
        }

        return response()->json(['success' => true]);
    }

    private function clientEmailHtml(array $data, string $submittedAt): string
    {
        $name        = htmlspecialchars($data['name']);
        $projectType = htmlspecialchars($data['projectType'] ?? 'Not specified');
        $budget      = htmlspecialchars($data['budget'] ?? 'Not specified');
        $message     = nl2br(htmlspecialchars($data['message']));

        return <<<HTML
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Project Inquiry Received</title>
</head>
<body style="margin:0;padding:0;background:#0a0f1a;font-family:'Segoe UI',Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0f1a;padding:40px 16px;">
  <tr>
    <td align="center">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#111827;border-radius:16px;overflow:hidden;border:1px solid rgba(255,255,255,0.08);">

        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#0ea5e9 0%,#6366f1 100%);padding:2px 0 0 0;">
          </td>
        </tr>
        <tr>
          <td style="padding:40px 40px 32px;text-align:center;border-bottom:1px solid rgba(255,255,255,0.06);">
            <div style="display:inline-block;background:rgba(16,185,129,0.12);border:1px solid rgba(16,185,129,0.3);border-radius:50%;width:64px;height:64px;line-height:64px;font-size:28px;margin-bottom:20px;">✓</div>
            <h1 style="margin:0 0 8px;color:#ffffff;font-size:24px;font-weight:700;letter-spacing:-0.3px;">Inquiry received, {$name}.</h1>
            <p style="margin:0;color:rgba(255,255,255,0.55);font-size:15px;line-height:1.6;">I'll review your project details and respond within <strong style="color:#10b981;">4 hours</strong> with practical direction.</p>
          </td>
        </tr>

        <!-- Summary -->
        <tr>
          <td style="padding:32px 40px;">
            <p style="margin:0 0 20px;color:rgba(255,255,255,0.4);font-size:11px;font-weight:600;letter-spacing:0.18em;text-transform:uppercase;">Your Inquiry Summary</p>
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.06);">
                  <span style="color:rgba(255,255,255,0.4);font-size:13px;">Project Type</span>
                </td>
                <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.06);text-align:right;">
                  <span style="color:#ffffff;font-size:13px;font-weight:600;">{$projectType}</span>
                </td>
              </tr>
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.06);">
                  <span style="color:rgba(255,255,255,0.4);font-size:13px;">Budget Range</span>
                </td>
                <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.06);text-align:right;">
                  <span style="color:#ffffff;font-size:13px;font-weight:600;">{$budget}</span>
                </td>
              </tr>
              <tr>
                <td style="padding:12px 0;">
                  <span style="color:rgba(255,255,255,0.4);font-size:13px;">Submitted</span>
                </td>
                <td style="padding:12px 0;text-align:right;">
                  <span style="color:#ffffff;font-size:13px;font-weight:600;">{$submittedAt}</span>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Project details -->
        <tr>
          <td style="padding:0 40px 32px;">
            <div style="background:rgba(255,255,255,0.04);border-left:3px solid #0ea5e9;border-radius:0 8px 8px 0;padding:16px 20px;">
              <p style="margin:0 0 8px;color:rgba(255,255,255,0.4);font-size:11px;font-weight:600;letter-spacing:0.14em;text-transform:uppercase;">Your Message</p>
              <p style="margin:0;color:rgba(255,255,255,0.75);font-size:14px;line-height:1.7;">{$message}</p>
            </div>
          </td>
        </tr>

        <!-- CTA -->
        <tr>
          <td style="padding:0 40px 32px;text-align:center;">
            <p style="margin:0 0 20px;color:rgba(255,255,255,0.5);font-size:14px;">Need to add something? Reach out directly:</p>
            <table cellpadding="0" cellspacing="0" style="margin:0 auto;">
              <tr>
                <td style="padding-right:12px;">
                  <a href="https://wa.me/971542435418" style="display:inline-block;background:rgba(16,185,129,0.15);border:1px solid rgba(16,185,129,0.3);color:#10b981;text-decoration:none;padding:12px 24px;border-radius:50px;font-size:13px;font-weight:600;">WhatsApp</a>
                </td>
                <td>
                  <a href="mailto:info@anastanveer.com" style="display:inline-block;background:rgba(14,165,233,0.15);border:1px solid rgba(14,165,233,0.3);color:#0ea5e9;text-decoration:none;padding:12px 24px;border-radius:50px;font-size:13px;font-weight:600;">Email Directly</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:24px 40px;border-top:1px solid rgba(255,255,255,0.06);text-align:center;">
            <p style="margin:0 0 4px;color:#ffffff;font-size:14px;font-weight:700;">Anas Tanveer</p>
            <p style="margin:0 0 12px;color:rgba(255,255,255,0.4);font-size:12px;">Full-Stack Developer · Dubai, UAE</p>
            <p style="margin:0;color:rgba(255,255,255,0.25);font-size:11px;">
              <a href="https://anastanveer.com" style="color:rgba(255,255,255,0.35);text-decoration:none;">anastanveer.com</a>
              &nbsp;·&nbsp;
              <a href="https://wa.me/971542435418" style="color:rgba(255,255,255,0.35);text-decoration:none;">+971 542 435 418</a>
            </p>
          </td>
        </tr>

      </table>
    </td>
  </tr>
</table>
</body>
</html>
HTML;
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
                'secret'   => $secret,
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
