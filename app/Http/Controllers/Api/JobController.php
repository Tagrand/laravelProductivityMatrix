<?php

namespace App\Http\Controllers\Api;

use App\User;
use App\Http\Controllers\Controller;
use App\Http\Resources\JobCollection;
use App\Job;

class JobController extends Controller
{
    public function index()
    {
        return new JobCollection(User::first()->jobs);
    }

    public function edit(Job $job)
    {
        $job->update([
            'name' => request('name'),
        ]);

        return response('', 202);
    }
}
