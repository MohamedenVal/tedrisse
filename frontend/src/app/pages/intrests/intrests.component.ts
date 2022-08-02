import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { Post } from 'src/app/models/post.model';
import { CategoriesService } from 'src/app/services/categories.service';
import { LocalApiService } from 'src/app/services/local-api.service';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-intrests',
  templateUrl: './intrests.component.html',
  styleUrls: ['./intrests.component.css']
})
export class IntrestsComponent implements OnInit {
  categories!: Category[];
  posts!: Post[];
  category!: Category;

  constructor(
    private categoriesService: CategoriesService,
    private localApi: LocalApiService,
    private route: ActivatedRoute,
    private title: Title,
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
        this.getCat(id);
      } else {
        this.getCategories()
        this.getPosts()
      }
    })
  }

  getCategories() {
    this.categoriesService.getCategories()
      .subscribe((res) => {
        this.localApi.setResource('categories', res)
        this.categories = res.data;
        this.title.setTitle(`مواضيع مهمة في البرمجة والعلوم الحديثة - إهتمامات | تدريس`)
      }, () => {
        this.categories = this.localApi.getResource('categories')?.data
      })
  }

  getPosts() {
    const localData = this.localApi.getResource('posts');
    this.posts = localData?.data
  }

  /**
   *
   * This function is for the single category page
   * It can be optimised using a filter method and , but I am lazy for now
   *
   */
  getCat(id: string) {
    this.categoriesService.getCategory(id)
      .subscribe((res) => {
        this.category = res
        this.title.setTitle(`مقالات حول ${res.title} - المقالات | تدريس`)
      })
  }
}
