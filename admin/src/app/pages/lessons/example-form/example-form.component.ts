import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, timer } from 'rxjs';
import { Example } from 'src/app/models/example.model';
import { PaginatedLesson } from 'src/app/models/paginated-lesson.model';
import { ExamplesService } from 'src/app/services/examples.service';
import { LessonsService } from 'src/app/services/lessons.service';

@Component({
  selector: 'app-example-form',
  templateUrl: './example-form.component.html',
  styleUrls: ['./example-form.component.scss']
})
export class ExampleFormComponent implements OnInit {
  form!: FormGroup;
  isSubmited = false;
  editMode = false;
  exampleId = '';
  lessons!: Observable<PaginatedLesson>;
  selectedLesson: string | undefined;
  example!: Example;

  constructor(
    private formBuilder: FormBuilder,
    private lessonsService: LessonsService,
    private examplesService: ExamplesService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {

    this.initForm();
    this.getLessons();
    this.checkEditMode();
  }

  onSubmit() {
    this.isSubmited = true;
    if (this.form.invalid) {
      return
    }

    const exampleFormData = new FormData();

    Object.keys(this.exampleForm).map((key) => {
      exampleFormData.append(key, this.exampleForm[key].value)
    })

    if(this.editMode) {
      this.updateExample(this.exampleId, exampleFormData)
    } else {
      this.createExample(exampleFormData)
    }
  }

  private checkEditMode() {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.editMode = true;
        this.exampleId = params['id'];

        this.examplesService.getExample(this.exampleId)
          .subscribe((res) => {
            this.exampleForm['title'].setValue(res.title);
            this.exampleForm['content'].setValue(res.content);
            this.exampleForm['lesson'].setValue(res.lesson);

            this.selectedLesson = res.lesson;
          })
      }
    })
  }

  getLessons() {
    this.lessons = this.lessonsService.getLessons();
  }

  private createExample(exampleFormData: FormData) {
    this.examplesService.createExample(exampleFormData)
      .subscribe((res) => {
        this.example = res;
        this.returnBack();
      })
  }

  private updateExample(id: string, exampleFormData: FormData) {
    this.examplesService.updateExample(exampleFormData, id)
      .subscribe((res) => {
        this.example = res;
        this.returnBack();
      });
  }

  initForm() {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      lesson: ['', Validators.required],
    });

    this.route.params.subscribe((params) => {
      if (params['lesson']) {
        this.selectedLesson = params['lesson'];
        this.exampleForm['lesson'].setValue(this.selectedLesson);
      }
    })
  }

  returnBack() {
    timer(2000)
      .toPromise()
      .then(() => {
          this.location.back();
      });
  }

  get exampleForm() {
    return this.form.controls;
  }

}
