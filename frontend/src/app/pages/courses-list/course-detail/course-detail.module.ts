import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseDetailRoutingModule } from './course-detail-routing.module';
import { CourseDetailComponent } from './course-detail.component';
import { LessonComponent } from './lesson/lesson.component';
import { LessonSidebarComponent } from './lesson-sidebar/lesson-sidebar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LessonExampleComponent } from './lesson-example/lesson-example.component';


@NgModule({
  declarations: [
    CourseDetailComponent,
    LessonComponent,
    LessonSidebarComponent,
    LessonExampleComponent,
  ],
  imports: [
    CommonModule,
    CourseDetailRoutingModule,
    SharedModule
  ]
})
export class CourseDetailModule { }
