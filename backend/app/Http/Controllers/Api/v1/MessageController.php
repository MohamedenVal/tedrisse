<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Models\Message;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    /**
     * return the messages
     */
    public function index()
    {
        return Message::all();
    }

    public function count()
    {
        return Message::count();
    }

    /**
     * return a specified resourse
     */
    public function show(Message $message)
    {
        return $message;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required',
            'message' => 'required',
        ]);

        return Message::create($request->only(['name', 'email', 'message']));
    }

     /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Message $message)
    {
        // $this->authorize('update', $lesson);
        $request->validate([
            'name' => 'required',
            'email' => 'required',
            'message' => 'required',
        ]);

        $message->update($request->only(['name', 'email', 'message']));

        return $message;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Message $message)
    {
        // $this->authorize('delete', $post);

        $message->delete();

        return response()->noContent();
    }

    /**
     * return unread messages
     */
    public function unread()
    {
        // $messages = Message::get()->where('read', '=', '0');
        $messages = Message::get()->where('read', '=', false);

        return $messages;
    }

    public function read()
    {
        $messages = Message::get()->where('read', '=', true);

        return $messages;
    }

    public function setread(Message $message)
    {
        $message->update(['read' => true]);
        return $message;
    }


}
