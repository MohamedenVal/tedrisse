import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessageDetailComponent } from './message-detail/message-detail.component';
import { MessgaesComponent } from './messgaes.component';

const routes: Routes = [
  {
    path: '',
    component: MessgaesComponent
  },
  {
    path: 'detail/:id',
    component: MessageDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessgaesRoutingModule { }
