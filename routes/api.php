<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get(
    '/jobs',
    function () {
        return [
            [
                "id"  => 1,
                "name"  => "build website",
                "y"  => 765,
                "x"  => 265
            ],
            [
                "id"  => 2,
                "name"  => "build app",
                "y"  => 0,
                "x"  => 1000
            ],
            [
                "id"  => 3,
                "name"  => "clean flat",
                "y"  => 1000,
                "x"  => 0
            ],
            [
                "id"  => 4,
                "name"  => "phone home",
                "y"  => 1000,
                "x"  => 1000
            ],
            [
                "id"  => 5,
                "name"  => "watch netflix",
                "y"  => 0,
                "x"  => 0
            ],
            [
                "id"  => 6,
                "name"  => "watch amazon prime",
                "y"  => 2,
                "x"  => 66
            ]
        ];
    }
);

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
