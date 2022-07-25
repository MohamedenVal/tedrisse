import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post!: Post;

  constructor(
    private route: ActivatedRoute,
    private postService: PostsService,
    private title: Title,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      let id = '';
      if(param['id']) {
        id = param['id']
        this.getPost(id)
      }
    })
  }

  getPost(id: string) {
    this.postService.getPost(id)
      .subscribe((res) => {
        this.post = res.data
        this.title.setTitle(`${this.post.title} | تدريس`)
      })
  }

}
