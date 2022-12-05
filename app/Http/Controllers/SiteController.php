<?php

namespace App\Http\Controllers;

use App\Models\City;
use App\Models\Currency;
use App\Models\Faq;
use App\Models\Frontend;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

class SiteController extends Controller
{
    public function index() {
        $cities = City::orderBy('name')->get();
        $currencies = Currency::all();
        $canLogin = Route::has('login');
        $canRegister = Route::has('register');
        //$laravelVersion = Application::VERSION;
        //$phpVersion = PHP_VERSION;
        return inertia('Home/Index', compact('currencies','canLogin', 'canRegister', 'cities') );
    }

    public function faqs() {
        $faqs = Faq::all();
        return inertia('Faq/Index', compact('faqs'));
    }

    public function termsOfUse() {
        $id = 1;
        $data = $this->getContent($id);
        return inertia('Page/Index', compact('data'));
    }

    public function getContent($id)
    {
        return Frontend::find($id);
    }
}
