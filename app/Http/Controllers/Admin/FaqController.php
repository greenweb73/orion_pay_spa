<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Faq\StoreRequest;
use App\Http\Requests\Admin\Faq\UpdateRequest;
use App\Models\Faq;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FaqController extends Controller
{
    public function __construct()    {
        $this->middleware('auth');
    }

    public function index() {
        $faqs = Faq::all();
        return Inertia::render('Admin/Faq/Index', compact('faqs'));
    }

    public function create() {
        return Inertia::render('Admin/Faq/Create');
    }

    public function store(StoreRequest $request) {

        Faq::firstOrCreate($request->validated());

        return redirect()->route('faq.index');
    }

    public function edit(Faq $faq) {

        return Inertia::render('Admin/Faq/Edit', compact('faq'));
    }

    public function update(Faq $faq, UpdateRequest $request) {
        $faq->update($request->validated());

        return redirect()->route('faq.index');
    }

    public function destroy(Faq $faq) {
        $faq->delete();

        return redirect()->route('faq.index');
    }
}
