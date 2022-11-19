<?php

namespace App\Http\Requests\Order;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'city' => 'nullable|array',
            'currency_from' => 'required|array',
            'currency_to' => 'required|array',
            'invoiceAmount' => 'nullable|integer',
            'withdrawAmount' => 'nullable|integer',
            'phone' => 'nullable|string' ,
            'telegram' => 'nullable|string|min:5|max:32'
        ];
    }
}
