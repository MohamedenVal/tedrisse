<?php

use App\Http\Controllers\Api\v1\PostController;
use App\Http\Controllers\Api\v1\CategoryController;
use App\Http\Controllers\Api\v1\LessonController;
use App\Http\Controllers\Api\v1\CourseController;
use App\Http\Controllers\Api\v1\Admin\UserController;
use App\Http\Controllers\Api\v1\MessageController;
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

Route::middleware(['cors'])->group(function () {

    Route::get('/admin/users', [UserController::class, 'index']);

    Route::post('/admin/register', [UserController::class, 'store']);
    Route::post('/admin/login', [UserController::class, 'login']);

    Route::apiResource('posts', PostController::class)->only(['index', 'show']);
    Route::get('posts/resource/count', [PostController::class, 'count']);

    Route::apiResource('categories', CategoryController::class)->only(['index', 'show']);
    Route::get('categories/{category}/posts', [CategoryController::class, 'posts'] );
    Route::get('categories/resource/count', [CategoryController::class, 'count']);

    Route::apiResource('lessons', LessonController::class)->only(['index', 'show']);
    Route::get('lessons/resource/count', [LessonController::class, 'count']);

    Route::apiResource('courses', CourseController::class)->only(['index', 'show']);
    Route::get('courses/{course}/lessons', [CourseController::class, 'lessons'] );
    Route::get('courses/resource/count', [CourseController::class, 'count']);

    Route::apiResource('students/messages', MessageController::class)->only(['store']);

    // Protected routes
    Route::group(['middleware' => ['auth:sanctum']], function () {
        Route::apiResource('categories', CategoryController::class)->only(['update', 'store', 'destroy']);
        Route::apiResource('posts', PostController::class)->only(['update', 'store', 'destroy']);
        Route::apiResource('lessons', LessonController::class)->only(['update', 'store', 'destroy']);
        Route::apiResource('courses', CourseController::class)->only(['update', 'store', 'destroy']);

        Route::apiResource('students/messages', MessageController::class)->only(['index', 'show', 'update', 'destroy']);

        Route::get('students/unread/messages', [MessageController::class, 'unread'] );
        Route::get('students/read/messages', [MessageController::class, 'read'] );
        Route::post('students/read/{message}', [MessageController::class, 'setread'] );

        Route::post('/admin/logout', [UserController::class, 'logout']);

    });

});

