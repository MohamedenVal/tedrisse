import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntrestsRoutingModule } from './intrests-routing.module';
import { IntrestsComponent } from './intrests.component';


@NgModule({
  declarations: [
    IntrestsComponent
  ],
  imports: [
    CommonModule,
    IntrestsRoutingModule
  ]
})
export class IntrestsModule { }
