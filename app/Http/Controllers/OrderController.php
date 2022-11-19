<?php

namespace App\Http\Controllers;

use App\Http\Requests\Order\StoreRequest;
use App\Mail\Order\OrderMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Exception;

class OrderController extends Controller
{
    public function store(StoreRequest $request)
    {
        $data = $request->validated();

        try {
            Mail::to('oleg2020fteam@gmail.com')->send(new OrderMail($data));
            return response()->json(['status' => 'ok']);
        } catch (Exception $e) {
            return response()->json(['status' => 'error']);
        }

        //return redirect()->route('home.index');
        //return inertia('Page/Welcome', compact('data'));
    }
}
