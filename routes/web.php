<?php

use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

// Route::inertia('/', 'welcome', [
//     'canRegister' => Features::enabled(Features::registration()),
// ])->name('welcome');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__ . '/settings.php';

// Route::get('/', function () {
//     return view('home');
// });
Route::get('/trending', function () {
    return view('trending');
});
Route::get('/store', function () {
    return view('store');
});
Route::get('/aboutus', function () {
    return view('aboutus');
});

Route::inertia('/', 'Home', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('home');

Route::inertia('/store', 'Store', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('store');

Route::inertia('/about', 'About', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('store');
Route::inertia('/trending', 'Trending', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('store');
