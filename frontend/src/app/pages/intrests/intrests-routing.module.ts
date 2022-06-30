import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntrestsComponent } from './intrests.component';

const routes: Routes = [{ path: '', component: IntrestsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntrestsRoutingModule { }
