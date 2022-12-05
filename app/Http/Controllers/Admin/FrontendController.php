<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Page\StoreRequest;
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
        //dd($pages[0]['data_values']);
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
        $data['data_values'] = [
            'title' => $inputContentValue['title'],
            'description' => $inputContentValue['description'],
            'slug' => $inputContentValue['slug'],
            'meta_title' => $inputContentValue['meta_title'],
            'meta_description' => $inputContentValue['meta_description'],
            'meta_keywords' => $inputContentValue['meta_keywords'],
        ];

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

//        $data['data_values'] = [
//            'title' => $inputContentValue['title'],
//            'description' => $inputContentValue['description'],
//            'slug' => $inputContentValue['slug'],
//            'meta_title' => $inputContentValue['meta_title'],
//            'meta_description' => $inputContentValue['meta_description'],
//            'meta_keywords' => $inputContentValue['meta_keywords'],
//        ];

        $page->update($data);
        return redirect()->route('admin.page.index');
    }

    public function pageDestroy(Frontend $page) {
        $page->delete();

        return redirect()->route('admin.page.index');
    }

}
