<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Show the application posts index.
     */
    public function index()
    {
        return view('admin.posts.index', [
            'posts' => Post::withCount('comments')->with('author')->latest()->paginate(50)
        ]);
    }

    /**
     * Display the specified resource edit form.
     * public function edit(Post $post)
     * {
     *     return view('admin.posts.edit', [
     *             'post' => $post,
     * 'users' => User::authors()->pluck('name', 'id'),
     *     ]);
     *  }
    */

    /**
     * Show the form for creating a new resource.
     */
    // public function create(Request $request): View
    // {
    //     return view('admin.posts.create', [
    //         'users' => User::authors()->pluck('name', 'id'),
    //     ]);
    // }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $post = Post::create($request->only(['title', 'content', 'posted_at', 'author_id', 'thumbnail_id']));

        return redirect()->route('admin.posts.edit', $post)->withSuccess(__('posts.created'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Post $post)
    {
        $post->update($request->only(['title', 'content', 'posted_at', 'author_id', 'thumbnail_id']));

        return redirect()->route('admin.posts.edit', $post)->withSuccess(__('posts.updated'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        $post->delete();

        return redirect()->route('admin.posts.index')->withSuccess(__('posts.deleted'));
    }
}
