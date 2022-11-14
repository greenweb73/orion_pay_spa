<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;

class PermissionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $permissions = [
            'role-list',
            'role-create',
            'role-edit',
            'role-delete',
            'currency-list',
            'currency-create',
            'currency-edit',
            'currency-delete',
            'city-list',
            'city-create',
            'city-edit',
            'city-delete',
            'faq-list',
            'faq-create',
            'faq-edit',
            'faq-delete',
            'order-list',
            'order-edit',
            'order-delete'
        ];

        foreach ($permissions as $permission) {
            Permission::create(['name' => $permission]);
        }
    }
}
