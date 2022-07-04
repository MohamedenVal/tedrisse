import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostDetailRoutingModule } from './post-detail-routing.module';
import { PostDetailComponent } from './post-detail.component';


@NgModule({
  declarations: [
    PostDetailComponent
  ],
  imports: [
    CommonModule,
    PostDetailRoutingModule
  ]
})
export class PostDetailModule { }
