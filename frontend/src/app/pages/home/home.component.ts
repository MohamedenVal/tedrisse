import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Course } from 'src/app/models/course.model';
import { Post } from 'src/app/models/post.model';
import { CourseService } from 'src/app/services/course.service';
import { LocalApiService } from 'src/app/services/local-api.service';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts!: Post[];
  courses!: Course[];

  constructor(
    private postsService: PostsService,
    private localApi: LocalApiService,
    private coursesService: CourseService,
    private title: Title
  ) { }

  ngOnInit(): void {
    this.getPosts();
    this.getCourses();
    this.title.setTitle('الرئيسية - البرمجة والتقنيات بالعربية | تدريس')
  }

  getPosts() {
    this.postsService.getPosts()
      .subscribe((res) => {
        this.localApi.setResource('posts', res)
        this.posts = this.limitElements(12, res.data);

      })
  }

  getCourses() {
    this.coursesService.getCourses()
      .subscribe((res) => {
        this.localApi.setResource('courses', res);
        this.courses = this.limitElements(6, res.data);
      }, () => {
        this.courses = this.limitElements(6,
          this.localApi.getResource('courses').data
        );
      })
  }

  private limitElements(number = 3, elems: Array<any>): Array<any> {
    let newElems: any[] = [];
    if (!elems) {
      return elems;
    }
    elems.forEach((elem, counter = 0) => {
      counter++;
      if(counter <= number) {
        newElems.push(elem)
      };
    })

    if (newElems) {
      return newElems.sort(this.compareId)
    } else {
      return elems;
    }
  }

  private compareId(a: Post | Course, b: Post | Course) {
    if (a.id < b.id) {
      return -1;
    }
    if (a.id > b.id) {
      return 1;
    }
    return 0;
  }

}
