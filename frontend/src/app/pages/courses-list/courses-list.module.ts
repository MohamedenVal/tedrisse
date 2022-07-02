import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesListRoutingModule } from './courses-list-routing.module';
import { CoursesListComponent } from './courses-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CoursesListComponent
  ],
  imports: [
    CommonModule,
    CoursesListRoutingModule,
    SharedModule
  ]
})
export class CoursesListModule { }
