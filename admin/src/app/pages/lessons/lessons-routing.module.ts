import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LessonFormComponent } from './lesson-form/lesson-form.component';
import { LessonsComponent } from './lessons.component';

const routes: Routes = [
  {
    path: '',
    component: LessonsComponent
  },
  {
    path: 'form',
    component: LessonFormComponent,
  },
  {
    path: 'form/:id',
    component: LessonFormComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LessonsRoutingModule { }
