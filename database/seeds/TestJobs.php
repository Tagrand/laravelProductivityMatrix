<?php

use App\Job;
use App\User;
use Illuminate\Database\Seeder;

class TestJobs extends Seeder
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
        ]);

        factory(Job::class, 10)->create([
            'user_id' => $user1->id,
        ]);

        $user2 = factory(User::class)->create([
            'name'  => 'Alexandrio Occasio-Cortez',
            'email' => env('TEST_EMAIL_TWO'),
        ]);

        factory(Job::class, 10)->create([
            'user_id' => $user2->id,
        ]);
    }
}
