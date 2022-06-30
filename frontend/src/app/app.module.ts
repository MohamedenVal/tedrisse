import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './components/slider/slider.component';
import { SharedModule } from './shared/shared.module';
import { CourseOverviewComponent } from './components/course-overview/course-overview.component';
import { PostOverviewComponent } from './components/post-overview/post-overview.component';
import { CoursesComponent } from './components/courses/courses.component';
import { PostsComponent } from './components/posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    CourseOverviewComponent,
    PostOverviewComponent,
    CoursesComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
