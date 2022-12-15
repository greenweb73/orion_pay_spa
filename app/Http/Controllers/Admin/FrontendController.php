<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Page\FaqStoreRequest;
use App\Http\Requests\Admin\Page\StoreRequest;
use App\Http\Requests\Admin\Page\FaqUpdateRequest;
use App\Http\Requests\Admin\Page\UpdateRequest;
use App\Models\Frontend;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FrontendController extends Controller
{
    public function __construct()    {
        $this->middleware('auth');
    }

    public function pageIndex() {
        $pages = Frontend::where('data_keys', 'page.element')->get();
        return Inertia::render('Admin/ManageContents/Page/Index', compact('pages'));
    }

    public function pageCreate() {

        return Inertia::render('Admin/ManageContents/Page/Create');
    }

    public function pageStore(StoreRequest $request) {
        $purifier = new \HTMLPurifier();
        $valInputs = $request->validated();
        foreach ($valInputs as $keyName => $input) {
            if (gettype($input) == 'array') {
                $inputContentValue[$keyName] = $input;
                continue;
            }
            $inputContentValue[$keyName] = $purifier->purify($input);
        }
        $data = [];
        $data['data_keys'] = 'page.element';
        foreach ($inputContentValue as $key => $value) {
            if ($key) {
                $data['data_values'][$key] = $value;
            }
        }

        Frontend::firstOrCreate($data);

        return redirect()->route('admin.page.index');
    }

    public function pageEdit(Frontend $page) {


        return Inertia::render('Admin/ManageContents/Page/Edit', compact('page'));
    }

    public function pageUpdate(Frontend $page, UpdateRequest $request) {
        $purifier = new \HTMLPurifier();
        $valInputs = $request->validated();
        foreach ($valInputs as $keyName => $input) {
            if (gettype($input) == 'array') {
                $inputContentValue[$keyName] = $input;
                continue;
            }
            $inputContentValue[$keyName] = $purifier->purify($input);
        }
        $data = [];
        $data['data_keys'] = 'page.element';
        foreach ($inputContentValue as $key => $value) {
            if ($key) {
                $data['data_values'][$key] = $value;
            }

        }

        $page->update($data);
        return redirect()->route('admin.page.index');
    }

    public function pageDestroy(Frontend $page) {
        $page->delete();

        return redirect()->route('admin.page.index');
    }

    public function pageFaqIndex() {
        $page = Frontend::where('data_keys', 'faq_page.element')->get();

        if ($page->isEmpty()) {
            return $this->pageFaqCreate();
        } else {
            return $this->pageFaqEdit($page[0]);
        }
    }

    private function pageFaqCreate() {
        return Inertia::render('Admin/ManageContents/FaqPage/Create');
    }

    public function pageFaqStore(FaqStoreRequest $request) {
        $purifier = new \HTMLPurifier();
        $valInputs = $request->validated();
        foreach ($valInputs as $keyName => $input) {
            if (gettype($input) == 'array') {
                $inputContentValue[$keyName] = $input;
                continue;
            }
            $inputContentValue[$keyName] = $purifier->purify($input);
        }
        $data = [];
        $data['data_keys'] = 'faq_page.element';
        foreach ($inputContentValue as $key => $value) {
            if ($key) {
                $data['data_values'][$key] = $value;
            }
        }

        Frontend::firstOrCreate($data);
    }

    public function pageFaqUpdate(Frontend $page, FaqUpdateRequest $request) {
        $purifier = new \HTMLPurifier();
        $valInputs = $request->validated();
        foreach ($valInputs as $keyName => $input) {
            if (gettype($input) == 'array') {
                $inputContentValue[$keyName] = $input;
                continue;
            }
            $inputContentValue[$keyName] = $purifier->purify($input);
        }
        $data = [];
        $data['data_keys'] = 'faq_page.element';
        foreach ($inputContentValue as $key => $value) {
            if ($key) {
                $data['data_values'][$key] = $value;
            }

        }

        $page->update($data);

        return redirect()->route('dashboard');
    }

    public function pageFaqEdit($page) {
        return Inertia::render('Admin/ManageContents/FaqPage/Edit', compact('page'));
    }


}
