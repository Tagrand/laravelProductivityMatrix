<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\JobCollection;

class JobController extends Controller
{
    public function index()
    {
        return new JobCollection(auth()->user()->jobs);
    }
}
