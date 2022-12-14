<?php

namespace App\Http\Controllers;

use App\Models\City;
use App\Models\Currency;
use App\Models\Faq;
use App\Models\Frontend;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Arr;
use Inertia\Inertia;

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
        $data['faqs'] = $faqs;
        return inertia('Faq/Index', compact('data'));
    }

    public function termsOfUse() {
        $id = 1;
        $data = $this->getContent($id)->only(['data_values']);
        $content = Arr::only($data['data_values'], ['title', 'description']);
        $meta['title'] = $data['data_values']['meta_title'] ?? '';
        $meta['description'] = $data['data_values']['meta_description'] ?? '';
        $meta['keywords'] = $data['data_values']['meta_keywords'] ?? '';
        return Inertia::render('Page/Index', compact('content', 'meta'))->withViewData(['meta' => $meta]);
        //return Inertia::render('Page/Index', ['meta' => $meta])->withViewData(['meta' => $meta]);
    }

    public function getContent($id)
    {
        return Frontend::find($id);
    }
}
