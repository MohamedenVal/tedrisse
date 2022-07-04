import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SliderComponent } from 'src/app/components/slider/slider.component';
import { CourseOverviewComponent } from 'src/app/components/course-overview/course-overview.component';
import { CoursesComponent } from 'src/app/components/courses/courses.component';


@NgModule({
  declarations: [
    HomeComponent,
    SliderComponent,
    CourseOverviewComponent,
    CoursesComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
