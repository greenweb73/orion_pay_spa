<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\City\StoreRequest;
use App\Http\Requests\Admin\City\UpdateRequest;
use App\Models\City;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CityController extends Controller
{
    public function __construct()    {
        $this->middleware('auth');
    }

    public function index() {
        $cities = City::all();

        return Inertia::render('Admin/City/Index', compact('cities'));
    }

    public function create() {
        return Inertia::render('Admin/City/Create');
    }

    public function store(StoreRequest $request) {
        City::firstOrCreate($request->validated());

        return redirect()->route('city.index')->with('success','Role created successfully');
    }

    public function edit(City $city) {

        return Inertia::render('Admin/City/Edit', compact('city'));
    }

    public function update(City $city, UpdateRequest $request) {
        $city->update($request->validated());

        return redirect()->route('city.index');
    }

    public function destroy(City $city) {
        $city->delete();

        return redirect()->route('city.index');
    }
}
