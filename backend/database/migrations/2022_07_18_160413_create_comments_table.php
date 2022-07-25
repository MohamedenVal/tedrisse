<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('comments', function (Blueprint $table) {
            $table->increments('id');

            $table->unsignedInteger('author_id')->default(0);
            $table->foreign('author_id')->references('id')->on('users')->onDelete('cascade');

            $table->unsignedInteger('post_id')->default(0);
            $table->foreign('post_id')->references('id')->on('posts')->onDelete('cascade');

            $table->text('content');
            $table->datetime('posted_at');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('comments');
    }
};
