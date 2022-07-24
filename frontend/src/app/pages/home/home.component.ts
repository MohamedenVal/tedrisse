import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { Post } from 'src/app/models/post.model';
import { CourseService } from 'src/app/services/course.service';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: Post[] = [];
  courses: Course[] = [];

  constructor(private postsService: PostsService, private coursesService: CourseService) { }

  ngOnInit(): void {
    this.getPosts();
    this.getCourses();
  }

  getPosts() {
    this.postsService.getPosts()
      .subscribe((res) => {
        this.posts = this.limitElements(6, res.data);

      })
  }

  getCourses() {
    this.coursesService.getCourses()
      .subscribe((res) => {
        this.courses = this.limitElements(3, res.data);
      })
  }

  private limitElements(number = 3, elems: Array<any>): Array<any> {
    let newElems: any[] = [];
    elems.forEach((elem, counter = 0) => {
      counter++;
      if(counter <= number) {
        newElems.push(elem)
      };
    })

    if (newElems) {
      return newElems
    } else {
      return elems;
    }
  }

}
