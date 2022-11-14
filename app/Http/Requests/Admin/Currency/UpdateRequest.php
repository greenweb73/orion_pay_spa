<?php

namespace App\Http\Requests\Admin\Currency;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
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
            'cc' => 'required|string',
            'name' => 'required|string',
            'from' => 'required|boolean',
            'to' => 'required|boolean',
            'min_value' => 'required|numeric',
            'type' => 'required|string'
        ];
    }
}
