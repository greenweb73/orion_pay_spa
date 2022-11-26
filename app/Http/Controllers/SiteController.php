<?php

namespace App\Http\Controllers;

use App\Models\City;
use App\Models\Currency;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

class SiteController extends Controller
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

    public function faqs() {
        return inertia('Faq/Index');
    }
}
