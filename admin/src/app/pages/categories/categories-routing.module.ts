import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesFormComponent } from './categories-form/categories-form.component';
import { CategoriesComponent } from './categories.component';

const routes: Routes = [
  {
  path: '',
  component: CategoriesComponent
  },
  {
    path: 'form',
    component: CategoriesFormComponent,
  },
  {
    path: 'form/:id',
    component: CategoriesFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
