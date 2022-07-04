import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseDetailRoutingModule } from './course-detail-routing.module';
import { CourseDetailComponent } from './course-detail.component';


@NgModule({
  declarations: [
    CourseDetailComponent
  ],
  imports: [
    CommonModule,
    CourseDetailRoutingModule
  ]
})
export class CourseDetailModule { }
