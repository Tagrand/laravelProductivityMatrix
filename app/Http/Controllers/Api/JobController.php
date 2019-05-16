<?php

namespace App\Http\Controllers\Api;

use App\Job;
use App\Http\Controllers\Controller;
use App\Http\Resources\JobCollection;
use App\Http\Resources\Job as JobResource;

class JobController extends Controller
{
    public function index()
    {
        return new JobCollection(auth()->user()->jobs);
    }

    public function create()
    {
        return new JobResource(Job::create([
            'name' => request('name'),
            'importance' => request('importance'),
            'urgency' => request('urgency'),
            'description' => request('description') ?? '',
            'user_id' => auth()->user()->id,
        ]));
    }

    public function update(Job $job)
    {
        $job->update(request(['name', 'importance', 'urgency', 'description']));

        return new JobResource($job);
    }
}
