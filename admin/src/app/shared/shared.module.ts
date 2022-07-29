import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExcerptPipe } from '../pipes/excerpt.pipe';
import { DateAgoPipe } from '../pipe/date-ago.pipe';



@NgModule({
  declarations: [
    ExcerptPipe,
    DateAgoPipe,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ExcerptPipe,
    DateAgoPipe,
  ]
})
export class SharedModule { }
