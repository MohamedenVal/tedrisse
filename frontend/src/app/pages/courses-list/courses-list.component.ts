import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Course } from 'src/app/models/course.model';
import { LocalApiService } from 'src/app/services/local-api.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  courses!: Course[];

  constructor(private title: Title, private localApi: LocalApiService) { }

  ngOnInit(): void {
    this.getCourses()
    this.title.setTitle('دورات تعليمية متوفرة الآن | تدريس')
  }

  getCourses() {
    this.courses = this.localApi.getResource('courses').data;
  }

}
