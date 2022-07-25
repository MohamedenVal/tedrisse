import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { Post } from 'src/app/models/post.model';
import { CategoriesService } from 'src/app/services/categories.service';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-intrests',
  templateUrl: './intrests.component.html',
  styleUrls: ['./intrests.component.css']
})
export class IntrestsComponent implements OnInit {
  categories!: Category[];
  posts!: Post[];

  constructor(
    private categoriesService: CategoriesService,
    private postsService: PostsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getcategoryPosts()
  }


  getcategoryPosts() {
    this.route.params.subscribe((param) => {
      let id = '';
      if(param['id']) {
        id = param['id']
        this.categoriesService.getCategoryPosts(id)
          .subscribe((res) => {
            this.posts = res;
          })
      } else {
        this.getCategories()
        this.getPosts()
      }
    })
  }

  getCategories() {
    this.categoriesService.getCategories()
      .subscribe((res) => {
        this.categories = res.data;
      })
  }

  getPosts() {
    this.postsService.getPosts()
      .subscribe((res) => {
        this.posts = res.data
      })
  }
}
