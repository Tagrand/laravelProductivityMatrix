<?php

namespace App\Http\Controllers\Api;

use App\Job;
use App\Http\Controllers\Controller;
use App\Http\Resources\Job as JobResource;

class CompletedJobsController extends Controller
{
    public function create(Job $job)
    {
        $job->update(['is_complete' => true]);

        return new JobResource($job);
    }
}
