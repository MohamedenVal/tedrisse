import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  courses: Course[] = [];

  constructor(private coursesService: CourseService) { }

  ngOnInit(): void {
    this.getCourses()
  }

  getCourses() {
    this.coursesService.getCourses()
      .subscribe((res) => {
        this.courses = res.data
      })
  }

}
