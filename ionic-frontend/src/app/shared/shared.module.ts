import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExcerptPipe } from '../pipes/excerpt.pipe';
import { FooterComponent } from '../components/footer/footer.component';
import { SliderComponent } from '../components/slider/slider.component';
import { SwiperModule } from 'swiper/angular';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '../components/header/header.component';



@NgModule({
  declarations: [
    ExcerptPipe,
    FooterComponent,
    SliderComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SwiperModule,
    IonicModule
  ],
  exports: [
    ExcerptPipe,
    FooterComponent,
    SliderComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
