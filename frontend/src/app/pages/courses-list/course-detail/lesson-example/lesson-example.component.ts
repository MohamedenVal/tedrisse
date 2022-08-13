import { Component, Input } from '@angular/core';
import { Example } from 'src/app/models/example.model';

@Component({
  selector: 'lesson-example',
  templateUrl: './lesson-example.component.html',
  styleUrls: ['./lesson-example.component.scss']
})
export class LessonExampleComponent {
  @Input() examples!: Example[];


}
