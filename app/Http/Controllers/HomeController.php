<?php

namespace App\Http\Controllers;

use App\Models\City;
use App\Models\Currency;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use PulkitJalan\Google\Facades\Google;
use Revolution\Google\Sheets\Facades\Sheets;

class HomeController extends Controller
{
    public function index() {
        $cities = City::all();
        $currencies = Currency::all();
        $canLogin = Route::has('login');
        $canRegister = Route::has('register');
        //$laravelVersion = Application::VERSION;
        //$phpVersion = PHP_VERSION;
        return inertia('Home/Index', compact('currencies','canLogin', 'canRegister', 'cities') );
    }
}
