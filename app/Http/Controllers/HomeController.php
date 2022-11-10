<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use PulkitJalan\Google\Facades\Google;
use Revolution\Google\Sheets\Facades\Sheets;

class HomeController extends Controller
{
    public function index() {

        return inertia('Home/Index', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
    }
}
