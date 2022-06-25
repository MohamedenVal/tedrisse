import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  courses: Course[] = [
    {
      id: 1,
      title: 'لغة التدمز القياسي HTML',
    description: ' هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد ',
      image: 'assets/images/1014.png'
    },
    {
      id: 2,
      title: 'آوراق الآنماط المتتالية',
    description: ' هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد ',
      image: 'assets/images/csslang.png'
    },
    {
      id: 3,
      title: 'جافا سكريبت',
    description: ' هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد ',
      image: 'assets/images/js.png'
    },
  ];

  constructor() { }

  getCourses(): Course[] {
    return [...this.courses];
  }

  getSingleCourse(id: string): Course {
    return {...this.courses[id]} ?? {};
  }
}
