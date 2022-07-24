import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseDetailComponent } from './course-detail.component';
import { LessonComponent } from './lesson/lesson.component';

const routes: Routes = [
  {
    path: '',
    component: CourseDetailComponent
  },
  {
    path: 'lesson/:id',
    component: LessonComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseDetailRoutingModule { }
