<?php

namespace App\Http\Controllers;

use App\Http\Requests\Order\StoreRequest;
use App\Mail\Order\OrderMail;
use App\Mail\OrderShipped;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Exception;
use Illuminate\Support\Facades\Http;


class OrderController extends Controller
{

    public function store(StoreRequest $request)
    {
        $data = $request->validated();

        try {
            //Mail::to(env('MAIL_TO_NOTIFY'))->send(new OrderMail($data));

            $this->sendNotify($data);

            //return response()->json(['status' => 'ok']);
            return redirect()->back()->with(['status' => 'ok']);
        } catch (Exception $e) {

            return response()->json(['status' => 'error']);
        }

        //return redirect()->route('home.index');
        //return inertia('Page/Welcome', compact('data'));
    }

    public function sendNotify($data)
    {
        $message_data = [];

        if (!empty($data['phone'])) {
            $message_data['Телефон'] = $data['phone'];
        } else {
            $message_data['Телеграм'] = $data['telegram'];
        }

        if (!empty($data['city'] && $data['currency_from']['type'] === 'cash')) {
            $message_data['Місто'] = $data['city']['name'];
        }

        $message_data['Віддається валюта'] = $data['currency_from']['name'] . PHP_EOL . 'сума: ' . $data['invoiceAmount'];
        $message_data['Отримується валюта'] = $data['currency_to']['name'] . PHP_EOL . 'сума: ' . $data['withdrawAmount'];

        $txt = '';
        foreach ($message_data as $key => $value) {

            $txt .= $key . ': ' . $value . PHP_EOL;

        }

        $response = Http::get(env('TELEGRAM_BOT_URL') . env('TELEGRAM_BOT_TOKEN') . '/sendMessage', [
            'chat_id' => env('CHAT_ID'),
            'text' => $txt,
        ]);

    }

}
