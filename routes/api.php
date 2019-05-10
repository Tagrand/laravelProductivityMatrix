<?php

use Illuminate\Http\Request;
use App\Http\Resources\JobCollection;

/*
|--------------------------------------------------------------------------
| API Routes
|----------------------------------------------uth----------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API! |
*/
Route::post('/login', ['as' => 'login', 'uses' => 'Api\AuthController@login']);

Route::middleware('auth:api')->group(function () {
    Route::post('/logout', 'Api\AuthController@logout');
});

Route::get('/jobs', 'Api\JobController@index')->middleware('auth:api');
Route::post('/jobs', 'Api\JobController@create')->middleware('auth:api');

Route::post('/completed-jobs/{job}', 'Api\CompletedJobsController@create')->middleware('auth:api');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
