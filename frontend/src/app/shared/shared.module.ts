import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/card/card.component';
import { ButtonComponent } from './components/button/button.component';
import { RouterModule } from '@angular/router';
import { PostOverviewComponent } from '../components/post-overview/post-overview.component';
import { PostsComponent } from '../components/posts/posts.component';
import { DetailComponent } from './detail/detail.component';



@NgModule({
  declarations: [
    NavigationComponent,
    FooterComponent,
    CardComponent,
    ButtonComponent,
    PostOverviewComponent,
    PostsComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ButtonComponent,
    CardComponent,
    FooterComponent,
    NavigationComponent,
    PostOverviewComponent,
    PostsComponent,
    DetailComponent
  ]
})
export class SharedModule { }
