<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use PulkitJalan\Google\Facades\Google;
use Revolution\Google\Sheets\Facades\Sheets;

class RateSheetController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        Sheets::setService(Google::make('sheets'));
        Sheets::spreadsheet('1e_CgYs0YSgYhukdehlCaSEOTNIRtDN28zQQF6_V-CoA');
        $rows = Sheets::sheet('Rates')->get();
        $header = $rows->pull(0);
        $header = array_map( function ($h) { return str_replace('/', '_', $h); }, (array) $header );

        $rates = Sheets::collection($header, $rows)[1];

        return $rates;
    }

}
