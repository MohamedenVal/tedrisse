<?php

use App\Http\Controllers\Api\v1\PostController;
use App\Http\Controllers\Api\v1\Admin\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Application Routes

Route::get('/admin/users', [UserController::class, 'index']);

Route::post('/admin/register', [UserController::class, 'store']);
Route::post('/admin/login', [UserController::class, 'login']);
Route::apiResource('posts', PostController::class)->only(['index', 'show']);



// Protected routes
Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::apiResource('posts', PostController::class)->only(['update', 'store', 'destroy']);


    Route::post('/admin/logout', [UserController::class, 'logout']);

});
