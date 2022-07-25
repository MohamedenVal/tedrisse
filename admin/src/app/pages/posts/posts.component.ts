import { Component, OnInit } from '@angular/core';
import { PaginatedPost } from 'src/app/models/paginated-post.model';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts!: PaginatedPost;
  deleting = false;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.getPosts()
  }

  private getPosts() {
    this.postsService.getPosts()
      .subscribe((res) => {
        this.posts = res;
        this.deleting = false;
      });
  }

  deletePost(id: string) {
    this.deleting = true;

    this.postsService.deletePost(id)
      .subscribe((res) => {
        this.getPosts()
      })
  }
}
