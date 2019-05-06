<?php

use Illuminate\Http\Request;
use App\Http\Resources\JobCollection;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API! |
*/

Route::post('/login', 'API\AuthController@login');

Route::middleware('auth:api')->group(function () {
    Route::post('/logout', 'API\AuthController@logout');
});

Route::get(
    '/jobs',
    function () {
        return new JobCollection(App\User::first()->jobs);
    }
);

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
