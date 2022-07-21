import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesListComponent } from './courses-list.component';

const routes: Routes = [
  { path: '', component: CoursesListComponent },
  {
    path: 'course/:id',
    loadChildren: () =>
      import('./course-detail/course-detail.module').then(
        (m) => m.CourseDetailModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesListRoutingModule {}
