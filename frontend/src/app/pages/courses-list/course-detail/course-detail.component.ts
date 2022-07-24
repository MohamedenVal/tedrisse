import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/models/course.model';
import { Lesson } from 'src/app/models/lesson.model';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  course!: Course;
  courseLessons: Lesson[] = [];

  constructor(private coursesService: CourseService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getSelectedCourse()
  }

  getSelectedCourse() {
    let id = '';

    this.route.params.subscribe((param) => {
      if(param['id']){
        id = param['id'];
        this.coursesService.getCourse(id)
          .subscribe((res) => {
            this.course = res
          })

        this.coursesService.getCourseLessons(id)
          .subscribe((res) => {
            this.courseLessons = res
          })
      }
    })
  }

}
