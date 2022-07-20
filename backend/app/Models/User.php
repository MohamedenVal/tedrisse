<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\belongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Support\Str;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'registered_at'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * Get the user's fullname titleized.
     */
    public function getFullnameAttribute(): string
    {
        return Str::title($this->name);
    }


    /**
     * Scope a query to only include users registered last week.
     */
    public function scopeLastWeek(Builder $query): Builder
    {
        return $query->whereBetween('registered_at', [carbon('1 week ago'), now()])
                     ->latest();
    }

    /**
     * Scope a query to order users by latest registered.
     */
    public function scopeLatest(Builder $query): Builder
    {
        return $query->orderBy('registered_at', 'desc');
    }

    /**
     * Scope a query to filter available author users.
     */
    public function scopeAuthors(Builder $query): Builder
    {
        return $query->whereHas('roles', function ($query) {
            $query->where('roles.name', Role::ROLE_ADMIN)
                  ->orWhere('roles.name', Role::ROLE_EDITOR);
        });
    }

    /**
     * Check if the user can be an author
     */
    public function canBeAuthor(): bool
    {
        return $this->isAdmin() || $this->isEditor();
    }

    /**
     * Check if the user has a role
     */
    public function hasRole(string $role): bool
    {
        return $this->roles->where('name', $role)->isNotEmpty();
    }

    /**
     * Check if the user has role admin
     */
    public function isAdmin(): bool
    {
        return $this->hasRole(Role::ROLE_ADMIN);
    }

    /**
     * Check if the user has role editor
     */
    public function isEditor(): bool
    {
        return $this->hasRole(Role::ROLE_EDITOR);
    }

    /**
     * Return the user's posts
     */
    public function posts(): HasMany
    {
        return $this->hasMany(Post::class, 'author_id');
    }

    /**
     * Return the user's posts
     */
    public function categories(): HasMany
    {
        return $this->hasMany(Post::class, 'author_id');
    }
    /**
     * Return the user's posts
     */
    public function courses(): HasMany
    {
        return $this->hasMany(Post::class, 'author_id');
    }

    /**
     * Return the user's posts
     */
    public function lessons(): HasMany
    {
        return $this->hasMany(Lesson::class, 'author_id');
    }

    /**
     * Return the user's comments
     */
    public function comments(): HasMany
    {
        return $this->hasMany(Comment::class, 'author_id');
    }

    /**
     * Return the user's likes
     */
    public function likes(): HasMany
    {
        return $this->hasMany(Like::class, 'author_id');
    }

    /**
     * Return the user's roles
     */
    public function roles(): belongsToMany
    {
        return $this->belongsToMany(Role::class)->withTimestamps();
    }
}
