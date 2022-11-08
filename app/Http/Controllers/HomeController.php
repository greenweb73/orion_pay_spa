<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use PulkitJalan\Google\Facades\Google;
use Revolution\Google\Sheets\Facades\Sheets;

class HomeController extends Controller
{
    public function index() {

        return inertia('Home/Index');
    }
}
