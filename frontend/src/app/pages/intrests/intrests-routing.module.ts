import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntrestsComponent } from './intrests.component';

const routes: Routes = [
  { path: '', component: IntrestsComponent },
  {
    path: 'post/:id',
    loadChildren: () =>
      import('./post-detail/post-detail.module').then(
        (m) => m.PostDetailModule
      ),
  },
  {
    path: 'category/:id',
    component: IntrestsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntrestsRoutingModule {}
