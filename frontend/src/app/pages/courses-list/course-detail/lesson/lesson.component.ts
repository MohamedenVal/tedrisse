import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Lesson } from 'src/app/models/lesson.model';
import { CourseService } from 'src/app/services/course.service';
import { LessonsService } from 'src/app/services/lessons.service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit {
  lesson!: Lesson;
  courseLessons!: Lesson[];

  constructor(
    private lessonsService: LessonsService,
    private route: ActivatedRoute,
    private courseService: CourseService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      if(param['id']){
        let id = param['id']

        this.getlesson(id)
      }
    })
  }

  getlesson(id: string) {
    this.lessonsService.getLesson(id)
      .subscribe((res) => {
        this.lesson = res.data;
        this.getCourseLessons();
      })
  }

  getCourseLessons() {
    this.courseService.getCourseLessons(this.lesson.course!)
      .subscribe((res) => {
        this.courseLessons = res
      })
  }



}
