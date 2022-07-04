import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntrestsRoutingModule } from './intrests-routing.module';
import { IntrestsComponent } from './intrests.component';
import { PostOverviewComponent } from './post-overview/post-overview.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryItemComponent } from './category-item/category-item.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    IntrestsComponent,
    PostOverviewComponent,
    CategoriesComponent,
    CategoryItemComponent
  ],
  imports: [
    CommonModule,
    IntrestsRoutingModule,
    SharedModule
  ]
})
export class IntrestsModule { }
