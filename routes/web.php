<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', fn() => Inertia::render('Home'))->name('home');

// Design Showcases
Route::get('/training-center', fn() => Inertia::render('DesignOne/TrainingCenter'))->name('training-center');
Route::get('/training-center/courses', fn() => Inertia::render('DesignOne/components/Courses'))->name('training-center.courses');
Route::get('/training-center/corporate', fn() => Inertia::render('DesignOne/components/Corporate'))->name('training-center.corporate');
Route::get('/training-center/about', fn() => Inertia::render('DesignOne/components/About'))->name('training-center.about');
Route::get('/pre-school', fn() => Inertia::render('DesignTwo/PreSchool'))->name('pre-school');
Route::get('/pre-school/programs', fn() => Inertia::render('DesignTwo/components/Programs'))->name('pre-school.programs');
Route::get('/pre-school/schedule', fn() => Inertia::render('DesignTwo/components/Schedule'))->name('pre-school.schedule');
Route::get('/pre-school/teachers', fn() => Inertia::render('DesignTwo/components/Teachers'))->name('pre-school.teachers');
Route::get('/school', fn() => Inertia::render('DesignThree/School'))->name('school');
Route::get('/school/academics', fn() => Inertia::render('DesignThree/components/Academics'))->name('school.academics');
Route::get('/school/admissions', fn() => Inertia::render('DesignThree/components/Admissions'))->name('school.admissions');
Route::get('/school/campus-life', fn() => Inertia::render('DesignThree/components/CampusLife'))->name('school.campus-life');
Route::get('/school/about', fn() => Inertia::render('DesignThree/components/About'))->name('school.about');

// Admin Panel (Hardcoded Demo)
Route::get('/admin', fn() => Inertia::render('Admin/Dashboard'))->name('admin');
