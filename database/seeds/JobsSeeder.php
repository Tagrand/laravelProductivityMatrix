<?php

use App\Job;
use App\User;
use Illuminate\Database\Seeder;

class JobsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user1 = factory(User::class)->create([
            'name'  => 'Clement Attlee',
            'email' => env('TEST_EMAIL_ONE'),
            'password' => env('TEST_PASSWORD'),
        ]);

        factory(Job::class, 10)->create([
            'user_id' => $user1->id,
        ]);

        $user2 = factory(User::class)->create([
            'name'  => 'Alexandrio Occasio-Cortez',
            'email' => env('TEST_EMAIL_TWO'),
            'password' => env('TEST_PASSWORD'),
        ]);

        factory(Job::class, 10)->create([
            'user_id' => $user2->id,
        ]);
    }
}
