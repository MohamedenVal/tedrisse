import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './gaurd/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { ShellComponent } from './shell/shell.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'posts',
        loadChildren: () =>
          import('./pages/posts/posts.module').then((m) => m.PostsModule),
      },
      {
        path: 'categories',
        loadChildren: () =>
          import('./pages/categories/categories.module').then(
            (m) => m.CategoriesModule
          ),
      },
      {
        path: 'lessons',
        loadChildren: () =>
          import('./pages/lessons/lessons.module').then((m) => m.LessonsModule),
      },
      {
        path: 'courses',
        loadChildren: () =>
          import('./pages/courses/courses.module').then((m) => m.CoursesModule),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./pages/users/users.module').then((m) => m.UsersModule),
      },
      {
        path: 'messages',
        loadChildren: () => import('./pages/messgaes/messgaes.module').then(m => m.MessgaesModule)
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
