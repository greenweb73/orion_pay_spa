<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Currency\StoreRequest;
use App\Http\Requests\Admin\Currency\UpdateRequest;
use App\Models\Currency;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CurrencyController extends Controller
{
    public function __construct()    {
        $this->middleware('auth');
    }

    public function index() {
        $currencies = Currency::all();

        return Inertia::render('Admin/Currency/Index', compact('currencies'));
    }

    public function create() {
        return Inertia::render('Admin/Currency/Create');
    }

    public function store(StoreRequest $request) {
        Currency::firstOrCreate($request->validated());

        return redirect()->route('currency.index');
    }

    public function edit(Currency $currency) {
        return Inertia::render('Admin/Currency/Edit', compact('currency'));
    }

    public function update(Currency $currency, UpdateRequest $request) {
        $currency->update($request->validated());

        return redirect()->route('currency.index');
    }

    public function destroy(Currency $currency) {
        $currency->delete();

        return redirect()->route('currency.index');
    }
}
