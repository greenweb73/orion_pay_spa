<?php

use App\Http\Controllers\Admin\CityController;
use App\Http\Controllers\Admin\CurrencyController;
use App\Http\Controllers\Admin\FaqController;
use App\Http\Controllers\Admin\FrontendController;
use App\Http\Controllers\Admin\RoleController;
use App\Http\Controllers\Api\RateSheetController;
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


Route::get('/', [\App\Http\Controllers\SiteController::class, 'index'])->name('home');
Route::get('/faqs', [\App\Http\Controllers\SiteController::class, 'faqs'])->name('faqs');
Route::get('/terms-of-use', [\App\Http\Controllers\SiteController::class, 'termsOfUse'])->name('terms-of-use');
Route::post('/orders', [\App\Http\Controllers\OrderController::class, 'store'])->name('order.store');

//Route::get('admin/dashboard', function () {
//    return Inertia::render('Admin/Dashboard');
//})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/clear', function(){
    \Illuminate\Support\Facades\Artisan::call('optimize:clear');
    $notify[]=['success', 'Cache cleared successfully'];
    return redirect()->back()->withNotify($notify);
})->name('clear-cache');

Route::get(    'rates/all', [RateSheetController::class, 'index']);
Route::group(['middleware' => ['role:admin']], function () {

    Route::get('admin/users/roles', [RoleController::class, 'index'])->name('admin.role.index');
    Route::get('admin/users/roles/create', [RoleController::class, 'create'])->name('admin.role.create');
    Route::post('admin/users/roles', [RoleController::class, 'store'])->name('admin.role.store');
    Route::get('admin/users/roles/{role}/edit', [RoleController::class, 'edit'])->name('admin.role.edit');
    Route::patch('admin/users/roles/{role}', [RoleController::class, 'update'])->name('admin.role.update');
    Route::delete('admin/users/roles/{role}', [RoleController::class, 'destroy'])->name('admin.role.destroy');

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

    Route::get('admin/faqs', [FaqController::class, 'index'])->name('admin.faq.index');
    Route::get('admin/faqs/create', [FaqController::class, 'create'])->name('admin.faq.create');
    Route::post('admin/faqs', [FaqController::class, 'store'])->name('admin.faq.store');
    Route::get('admin/faqs/{faq}/edit', [FaqController::class, 'edit'])->name('admin.faq.edit');
    Route::patch('admin/faqs/{faq}', [FaqController::class, 'update'])->name('admin.faq.update');
    Route::delete('admin/faqs/{faq}', [FaqController::class, 'destroy'])->name('admin.faq.destroy');

    Route::get('admin/manage-contents/pages', [FrontendController::class, 'pageIndex'])->name('admin.page.index');
    Route::get('admin/manage-contents/pages/create', [FrontendController::class, 'pageCreate'])->name('admin.page.create');
    Route::post('admin/manage-contents/pages', [FrontendController::class, 'pageStore'])->name('admin.page.store');
    Route::get('admin/manage-contents/pages/{page}/edit', [FrontendController::class, 'pageEdit'])->name('admin.page.edit');
    Route::patch('admin/manage-contents/pages/{page}', [FrontendController::class, 'pageUpdate'])->name('admin.page.update');
    Route::delete('admin/manage-contents/pages/{page}', [FrontendController::class, 'pageDestroy'])->name('admin.page.destroy');

    Route::get('admin/manage-contents/faq_page', [FrontendController::class, 'pageFaqIndex'])->name('admin.faq.page.index');
    Route::post('admin/manage-contents/faq_page', [FrontendController::class, 'pageFaqStore'])->name('admin.faq.page.store');
    //Route::get('admin/manage-contents/faq_page/edit', [FrontendController::class, 'pageFaqEdit'])->name('admin.faq.page.index');
    Route::patch('admin/manage-contents/faq_page/{page}', [FrontendController::class, 'pageFaqUpdate'])->name('admin.faq.page.update');
});

require __DIR__.'/auth.php';
