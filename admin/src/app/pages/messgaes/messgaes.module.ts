import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessgaesRoutingModule } from './messgaes-routing.module';
import { MessgaesComponent } from './messgaes.component';
import { MessageDetailComponent } from './message-detail/message-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MessgaesComponent,
    MessageDetailComponent
  ],
  imports: [
    CommonModule,
    MessgaesRoutingModule,
    SharedModule
  ]
})
export class MessgaesModule { }
