<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Post extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'slug' => $this->slug,
            'content' => $this->content,
            'posted_at' => $this->posted_at->toIso8601String(),
            'author_id' => $this->author_id,
            'category' => $this->category,
            'comments_count' => $this->comments_count ?? $this->comments()->count()
        ];
    }
}
