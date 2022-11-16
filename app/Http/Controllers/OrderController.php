<?php

namespace App\Http\Controllers;

use App\Http\Requests\Order\StoreRequest;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function store(StoreRequest $request)
    {
        $data = $request->validated();



        return inertia('Page/Welcome', compact('data'));
    }
}
