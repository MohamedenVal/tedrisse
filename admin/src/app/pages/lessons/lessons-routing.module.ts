import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleFormComponent } from './example-form/example-form.component';
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
  },
  {
    path: 'form/:lesson/example',
    component: ExampleFormComponent,
  },
  {
    path: 'form/:lesson/example/:id',
    component: ExampleFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LessonsRoutingModule { }
