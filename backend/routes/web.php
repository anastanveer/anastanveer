<?php

use App\Http\Controllers\ContactController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    abort(404);
});

Route::post('/api/contact', ContactController::class)->middleware('throttle:contact');
