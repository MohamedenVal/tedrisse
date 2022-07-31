import { Component, OnInit } from '@angular/core';
import { Lesson } from 'src/app/models/lesson.model';
import { CourseService } from 'src/app/services/course.service';
import { LessonsService } from 'src/app/services/lessons.service';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss']
})
export class LessonsComponent implements OnInit {
  lessons: Lesson[]= [];
  deleting = false;

  constructor(private lessonsService: LessonsService, private courseService: CourseService) { }

  ngOnInit(): void {
    this.getLessons()
  }

  getLessons() {
    this.lessonsService.getLessons()
      .subscribe((res) => {
        this.lessons = res.data
        // this.getCourse('')
        this.deleting = false
      })
  }

  deleteLesson(id: string) {
    this.deleting = true;

    this.lessonsService.deleteLesson(id)
      .subscribe(() => {
        this.getLessons()
      })
  }

  getCourse(id: string) {
    return this.courseService.getCourse(id)
  }

}
