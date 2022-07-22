import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExcerptPipe } from '../pipes/excerpt.pipe';



@NgModule({
  declarations: [
    ExcerptPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ExcerptPipe
  ]
})
export class SharedModule { }
