import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseDetailRoutingModule } from './course-detail-routing.module';
import { CourseDetailComponent } from './course-detail.component';
import { LessonComponent } from './lesson/lesson.component';
import { LessonSidebarComponent } from './lesson-sidebar/lesson-sidebar.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CourseDetailComponent,
    LessonComponent,
    LessonSidebarComponent,
  ],
  imports: [
    CommonModule,
    CourseDetailRoutingModule,
    SharedModule
  ]
})
export class CourseDetailModule { }
