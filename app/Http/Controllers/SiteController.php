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
        $result_query = $this->getContent('faq_page.element');

        $meta['title'] = $result_query['meta_title'] ?? '';
        $meta['description'] = $result_query['meta_description'] ?? '';
        $meta['keywords'] = $result_query['meta_keywords'] ?? '';

        return Inertia::render('Faq/Index', compact('data', 'meta'))->withViewData(['meta' => $meta]);
    }

    public function termsOfUse() {
        $id = 1;
        $result_query = $this->getContent($id);

        $content = Arr::only($result_query, ['title', 'description']);
        $meta['title'] = $result_query['meta_title'] ?? '';
        $meta['description'] = $result_query['meta_description'] ?? '';
        $meta['keywords'] = $result_query['meta_keywords'] ?? '';

        return Inertia::render('Page/Index', compact('content', 'meta'))->withViewData(['meta' => $meta]);
        //return Inertia::render('Page/Index', ['meta' => $meta])->withViewData(['meta' => $meta]);
    }

    public function getContent($key)
    {

        if(gettype($key) === 'integer') {
            return Frontend::find($key)->value('data_values');
        } elseif (gettype($key) === 'string') {
            return Frontend::where('data_keys', $key)->value('data_values');
        }
    }
}
