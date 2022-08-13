import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LessonsRoutingModule } from './lessons-routing.module';
import { LessonsComponent } from './lessons.component';
import { LessonFormComponent } from './lesson-form/lesson-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuillModule, QuillModules } from 'ngx-quill';
import { ExampleFormComponent } from './example-form/example-form.component';
import { ExamplesComponent } from './examples/examples.component';

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
    LessonsComponent,
    LessonFormComponent,
    ExampleFormComponent,
    ExamplesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LessonsRoutingModule,
    SharedModule,
    QuillModule.forRoot({
      modules,
      placeholder: 'Start writting ...',
    })
  ]
})
export class LessonsModule { }
