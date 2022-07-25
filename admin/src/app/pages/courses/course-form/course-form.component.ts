import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { timer } from 'rxjs';
import { Course } from 'src/app/models/course.model';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {
  form!: FormGroup;
  isSubmited = false;
  editMode = false;
  courseid = '';

  constructor(
    private formBuilder: FormBuilder,
    private courseService: CourseService,
    private location: Location,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.initForm();

    this.checkEditMode();
  }

  private initForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      description: [''],
      image: [''],
    })
  }

  onSubmit() {
    this.isSubmited = true;
    if(this.form.invalid) return;

    const courseFormData = new FormData();

    Object.keys(this.courseForm).map((key) => {
      courseFormData.append(key, this.courseForm[key].value)
    })

    if (this.editMode) {
      this.updateCourse(courseFormData, this.courseid);
    } else {
      this.createCourse(courseFormData);
    }
  }

  private createCourse(courseFormData: FormData) {
    this.courseService.createCourse(courseFormData)
      .subscribe((res: Course) => {
        this.returnBack();
      })
  }

  private updateCourse(courseFormData: FormData, id: string) {
    this.courseService.updateCourse(courseFormData, id)
      .subscribe((res) => {
        this.returnBack()
      })
  }

  private checkEditMode() {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.editMode = true;
        this.courseid = params['id'];

        this.courseService.getCourse(this.courseid)
          .subscribe((res) => {
            this.courseForm['name'].setValue(res.name);
            this.courseForm['image'].setValue(res.image);
            this.courseForm['description'].setValue(res.description);
          })
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

  get courseForm() {
    return this.form.controls;
  }

}
