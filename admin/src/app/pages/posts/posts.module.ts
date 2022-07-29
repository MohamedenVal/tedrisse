import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { PostFormComponent } from './post-form/post-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { QuillModule, QuillModules } from 'ngx-quill';

const modules: QuillModules = {
  toolbar: {
    container: [
    ['bold', 'italic', 'underline', 'strike'], // toggled buttons
    ['blockquote', 'code-block'],

    [{header: 1}, { header: 2}], // custom button values
    [{ list: 'ordered'}, { list: 'bullet' }],

    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }], // dropdown with defaults
    [{ font: [] }],
    [{ align: [] }],

    //['link', 'image', 'video'], // link, image and video
  ]}
}
@NgModule({
  declarations: [
    PostsComponent,
    PostFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PostsRoutingModule,
    SharedModule,
    QuillModule.forRoot({
      modules,
      placeholder: "Write an awesome post ..."
    })
  ]
})
export class PostsModule { }
