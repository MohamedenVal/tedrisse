import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course.model';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  courses: Course[] = [];

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
      this.courses = this.coursesService.getCourses();
  }
}
