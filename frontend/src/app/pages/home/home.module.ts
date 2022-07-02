import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SliderComponent } from 'src/app/components/slider/slider.component';
import { CourseOverviewComponent } from 'src/app/components/course-overview/course-overview.component';
import { CoursesComponent } from 'src/app/components/courses/courses.component';
import { PostOverviewComponent } from 'src/app/components/post-overview/post-overview.component';
import { PostsComponent } from 'src/app/components/posts/posts.component';


@NgModule({
  declarations: [
    HomeComponent,
    SliderComponent,
    CourseOverviewComponent,
    PostOverviewComponent,
    CoursesComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
