<?php

namespace Database\Seeders;

use App\Models\City;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CityTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $cities = [
            [
                'name' => 'Вінниця',
                'coeff' => 0.995
            ],
            [
                'name' => 'Дніпро',
                'coeff' => 0.995
            ],
            [
                'name' => 'Житомир',
                'coeff' => 0.995
            ],
            [
                'name' => 'Запоріжжя',
                'coeff' => 0.995
            ],
            [
                'name' => 'Івано-Франківськ',
                'coeff' => 0.995
            ],
            [
                'name' => 'Київ',
                'coeff' => 0.998
            ]
        ];

        foreach ($cities as $city) {
            City::create(['name' => $city['name'], 'coeff' => $city['coeff']]);
        }

    }
}
