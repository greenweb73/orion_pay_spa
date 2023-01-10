<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Inertia\Response;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class RoleController extends Controller
{
    function __construct() {
        $this->middleware('permission:role-list|role-create|role-edit|role-delete', ['only' => ['index','store']]);
        $this->middleware('permission:role-create', ['only' => ['create','store']]);
        $this->middleware('permission:role-edit', ['only' => ['edit','update']]);
        $this->middleware('permission:role-delete', ['only' => ['destroy']]);
    }

    public function index(Request $request) {
        $roles = Role::orderBy('id','DESC')->paginate(5);

        $user_can['edit'] = Auth::user()->hasPermissionTo('role-edit');
        $user_can['delete'] = Auth::user()->hasPermissionTo('role-delete');

//        $auth['user']['permissions']['role-edit'] = Auth::user()->hasPermissionTo('role-edit');
//        $auth['user']['permissions']['role-delete'] = Auth::user()->hasPermissionTo('role-delete');

        return Inertia::render('Admin/Role/Index', compact('roles', 'user_can' ));
//        return view('roles.index',compact('roles'))
//            ->with('i', ($request->input('page', 1) - 1) * 5);
    }

    public function create() {
        $permissions = Permission::get();
        return Inertia::render('Admin/Role/Create', compact('permissions'));

    }

    public function store(Request $request) {
        $this->validate($request, [
            'name' => 'required|unique:roles,name',
            'permissions' => 'required',
        ]);


        $role = Role::create(['name' => $request->input('name')]);
        $role->syncPermissions($request->input('permissions'));

        return redirect()->route('admin.role.index')->with('success','Role created successfully');
    }
//    /**
//     * Display the specified resource.
//     *
//     * @param  int  $id
//     * @return \Illuminate\Http\Response
//     */
//    public function show($id)
//    {
//        $role = Role::find($id);
//        $rolePermissions = Permission::join("role_has_permissions","role_has_permissions.permission_id","=","permissions.id")
//            ->where("role_has_permissions.role_id",$id)
//            ->get();
//
//        return view('roles.show',compact('role','rolePermissions'));
//    }
//

    public function edit($id) {
        $role = Role::find($id);
        $permissions = Permission::get();
        $rolePermissions = DB::table("role_has_permissions")->where("role_has_permissions.role_id",$id)
            ->pluck('role_has_permissions.permission_id','role_has_permissions.permission_id')
            ->all();
        return Inertia::render('Admin/Role/Edit', compact('role', 'permissions', 'rolePermissions'));
    }

    public function update(Request $request, $id) {
        $this->validate($request, [
            'role' => 'required',
            'permissions' => 'required',
        ]);

        $role = Role::find($id);
        $role->name = $request->input('role.name');
        $role->save();

        $role->syncPermissions($request->input('permissions'));

        return redirect()->route('admin.role.index')->with('success', 'Role updated successfully');
    }

    public function destroy($id) {
        DB::table("roles")->where('id',$id)->delete();

        return redirect()->route('admin.role.index')->with('success', 'Role deleted successfully');
    }
}
