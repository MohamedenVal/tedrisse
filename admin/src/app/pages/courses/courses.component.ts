import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { PaginatedCourse } from 'src/app/models/paginated-course.model';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];
  paginationCourse!: PaginatedCourse;

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.getCourses()
  }

  private getCourses() {
    this.courseService.getCourses()
      .subscribe((response) => {
        this.courses = response.data;
        this.paginationCourse = response;
      })
  }

  deleteCourse(id: string) {
    this.courseService.deleteCourse(id)
      .subscribe((res) => {
        this.getCourses();
      }, (err) => {
        console.log(err);

      })
  }
}
