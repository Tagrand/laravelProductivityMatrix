<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Job;
use Faker\Generator as Faker;

$factory->define(Job::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'importance' => $faker->numberBetween(1, 999),
        'urgency' => $faker->numberBetween(1, 999),
        'description' => $faker->text,
        'is_complete' => false,
        'is_skipped' => false,
    ];
});
