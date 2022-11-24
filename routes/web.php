<?php

use App\Http\Controllers\Admin\CityController;
use App\Http\Controllers\Admin\CurrencyController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Admin\DashboardController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Route::get('/', function () {
//    return Inertia::render('Welcome', [
//        'canLogin' => Route::has('login'),
//        'canRegister' => Route::has('register'),
//        'laravelVersion' => Application::VERSION,
//        'phpVersion' => PHP_VERSION,
//    ]);
//});


Route::get('/', [\App\Http\Controllers\HomeController::class, 'index'])->name('home.index');
Route::get('/faqs', [\App\Http\Controllers\FaqController::class, 'index'])->name('faq.index');
Route::post('/orders', [\App\Http\Controllers\OrderController::class, 'store'])->name('order.store');

//Route::get('admin/dashboard', function () {
//    return Inertia::render('Admin/Dashboard');
//})->middleware(['auth', 'verified'])->name('dashboard');



Route::group(['middleware' => ['auth', 'verified', 'role:admin']], function () {
    Route::get('admin/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    Route::get('admin/currencies', [CurrencyController::class, 'index'])->name('currency.index');
    Route::get('admin/currencies/create', [CurrencyController::class, 'create'])->name('currency.create');
    Route::post('admin/currencies', [CurrencyController::class, 'store'])->name('currency.store');
    Route::get('admin/currencies/{currency}/edit', [CurrencyController::class, 'edit'])->name('currency.edit');
    Route::patch('admin/currencies/{currency}', [CurrencyController::class, 'update'])->name('currency.update');
    Route::delete('admin/currencies/{currency}', [CurrencyController::class, 'destroy'])->name('currency.destroy');

    Route::get('admin/cities', [CityController::class, 'index'])->name('city.index');
    Route::get('admin/cities/create', [CityController::class, 'create'])->name('city.create');
    Route::post('admin/cities', [CityController::class, 'store'])->name('city.store');
    Route::get('admin/cities/{city}/edit', [CityController::class, 'edit'])->name('city.edit');
    Route::patch('admin/cities/{city}', [CityController::class, 'update'])->name('city.update');
    Route::delete('admin/cities/{city}', [CityController::class, 'destroy'])->name('city.destroy');
});

require __DIR__.'/auth.php';
