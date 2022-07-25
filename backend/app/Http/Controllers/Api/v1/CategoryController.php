<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Http\Resources\Post;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Return the categories.
     */
    public function index(Request $request)
    {
        // return Category::all();
        return Category::search($request->input('q'))->withCount('posts')->latest()->paginate($request->input('limit', 20));
    }

    public function count()
    {
        return Category::count();
    }

    /**
     * Return the specified resource.
     */
    public function show(Category $category)
    {
        return $category;

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Category $category)
    {
        // $this->authorize('update', $lesson);
        $request->validate([
            'title' => 'required'
        ]);

        $category->update($request->only(['title', 'keys']));

        return $category;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // $this->authorize('store', Lesson::class);
        $request->validate([
            'title' => 'required'
        ]);

        return Category::create($request->only(['title', 'keys']));

    }

    public function posts(Category $category)
    {
        $posts = $category->posts()->get();
        return $posts;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $category)
    {
        // $this->authorize('delete', $post);

        $category->delete();

        return response()->noContent();
    }

}
