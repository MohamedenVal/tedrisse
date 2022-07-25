<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Models\Course;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    /**
     * Return the courses.
     */
    public function index(Request $request)
    {
        return Course::search($request->input('q'))->withCount('lessons')->latest()->paginate($request->input('limit', 20));

    }

    public function count()
    {
        return Course::count();
    }

    /**
     * Return the specified resource.
     */
    public function show(Course $course)
    {
        return $course;

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Course $course)
    {
        // $this->authorize('update', $lesson);
        $request->validate([
            'name' => 'required'
        ]);

        $course->update($request->only(['name', 'description', 'image']));

        return $course;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // $this->authorize('store', Lesson::class);
        $request->validate([
            'name' => 'required'
        ]);

        return Course::create($request->only(['name', 'description', 'image']));

    }

    public function lessons(Course $course)
    {
        $lessons = $course->lessons()->get();
        return $lessons;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Course $course)
    {
        // $this->authorize('delete', $post);

        $course->delete();

        return response()->noContent();
    }

}
