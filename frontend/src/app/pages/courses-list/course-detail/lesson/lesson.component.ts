import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Example } from 'src/app/models/example.model';
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
  examples!: Observable<Example[]>;

  constructor(
    private lessonsService: LessonsService,
    private route: ActivatedRoute,
    private courseService: CourseService,
    private title: Title
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      if(param['id']){
        let id = param['id']
        this.getlesson(id)
        this.getExamples(id)
      }
    })
  }

  getlesson(id: string) {
    this.lessonsService.getLesson(id)
      .subscribe((res) => {
        this.lesson = res.data;
        this.title.setTitle(`${this.lesson.title} - ${this.title.getTitle()}`)
        this.getCourseLessons();
      })
  }

  getExamples(id: string) {
    this.examples = this.lessonsService.getLessonExamples(id);
  }

  getCourseLessons() {
    this.courseService.getCourseLessons(this.lesson.course!)
      .subscribe((res) => {
        this.courseLessons = res
      })
  }

}
