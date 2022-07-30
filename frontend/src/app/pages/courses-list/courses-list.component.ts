import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Course } from 'src/app/models/course.model';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  courses!: Course[];

  constructor(private coursesService: CourseService, private title: Title) { }

  ngOnInit(): void {
    this.getCourses()
    this.title.setTitle('دورات تعليمية متوفرة الآن | تدريس')
  }

  getCourses() {
    this.coursesService.getCourses()
      .subscribe((res) => {
        this.courses = res.data
      })
  }

}
