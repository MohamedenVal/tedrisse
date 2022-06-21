import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { SwiperModule } from 'swiper/angular';
import { SliderComponent } from '../components/slider/slider.component';
import { CourseOverviewComponent } from '../components/course-overview/course-overview.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SwiperModule,
  ],
  declarations: [
    HomePage,
    SliderComponent,
    CourseOverviewComponent
  ]
})
export class HomePageModule {}
