import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, timer } from 'rxjs';
import { Example } from 'src/app/models/example.model';
import { PaginatedCourse } from 'src/app/models/paginated-course.model';
import { CourseService } from 'src/app/services/course.service';
import { LessonsService } from 'src/app/services/lessons.service';
import Quill from 'quill';
import { VideoHandler, ImageHandler, Options } from 'ngx-quill-upload';

Quill.register('modules/imageHandler', ImageHandler);
Quill.register('modules/videoHandler', VideoHandler);
@Component({
  selector: 'app-lesson-form',
  templateUrl: './lesson-form.component.html',
  styleUrls: ['./lesson-form.component.scss']
})
export class LessonFormComponent implements OnInit {
  form!: FormGroup;
  isSubmited = false;
  editMode = false;
  lessonId = '';
  courses!: PaginatedCourse;
  selectedCourse: string | undefined;
  examples!: Observable<Example[]>;

  modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'header': 1 }, { 'header': 2 }],
      [{ 'indent': '-1'}, { 'indent': '+1' }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],
      ['blockquote', 'code-block'],
      [{ 'direction': 'rtl' }],
      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],

      ['clean'],                                         // remove formatting button

      ['link', 'image', 'video'],
    ],
    imageHandler: {
      upload: (file: any) => {
       return new Promise((resolve, reject) => {

        if (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg') { // File types supported for image
          if (file.size < 1000000) { // Customize file size as per requirement

          // Sample API Call
            const uploadData = new FormData();
            uploadData.append('image', file, file.name);

            this.lessonsService.uploadImages(uploadData)
              .subscribe((result) => {
                resolve(result?.file.url);
              }, (err) => {
                console.log(err);

              })
          } else {
            reject('Size too large');
           // Handle Image size large logic
          }
        } else {
          reject('Unsupported type');
         // Handle Unsupported type logic
        }
      });
      },
      accepts: ['png', 'jpg', 'jpeg', 'jfif'] // Extensions to allow for images (Optional) | Default - ['jpg', 'jpeg', 'png']
    } as Options,
    videoHandler: {
      upload: (file: any) => {
        return // your uploaded video URL as Promise<string>
      },
      accepts: ['mpeg', 'avi']  // Extensions to allow for videos (Optional) | Default - ['mp4', 'webm']
    } as Options
  };

  constructor(
    private formBuilder: FormBuilder,
    private lessonsService: LessonsService,
    private coursesService: CourseService,
    private location: Location,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.initForm()
    this.getCourses()
    this.checkEditMode()

  }

  onSubmit() {
    this.isSubmited = true
    if (this.form.invalid) {
      return
    }

    const lessonFormData = new FormData();

    Object.keys(this.lessonForm).map((key) => {
      lessonFormData.append(key, this.lessonForm[key].value)
    })

    if (this.editMode) {
      this.updateLesson(lessonFormData, this.lessonId)
    } else {
      this.createLesson(lessonFormData)
    }

  }

  private getCourses() {
    this.coursesService.getCourses()
      .subscribe((res) => {
        this.courses = res
      })
  }
  private getExamples(id: string) {
    this.examples = this.lessonsService.getLessonExamples(id)
  }

  private initForm() {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      course: [''],
      author_id: ['1']
    })
  }

  private checkEditMode() {

    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.editMode = true;
        this.lessonId = params['id'];
        this.getExamples(this.lessonId);

        this.lessonsService.getLesson(this.lessonId)
          .subscribe((res) => {
            this.lessonForm['title'].setValue(res.data.title);
            this.lessonForm['content'].setValue(res.data.content);
            this.lessonForm['course'].setValue(res.data.course);
            // this.lessonForm['course'].setValidators([])
            // this.lessonForm['course'].updateValueAndValidity()

            this.selectedCourse = res.data.course;
          })

      }
    })

  }

  private createLesson(lessonFormData: FormData) {
    this.lessonsService.createLesson(lessonFormData)
      .subscribe((res) => {
        this.returnBack()

      })
  }

  private updateLesson(lessonFormData: FormData, id: string) {
    this.lessonsService.updateLesson(lessonFormData, id)
      .subscribe((res) => {
        this.returnBack()
      })
  }

  returnBack() {
    timer(2000)
      .toPromise()
      .then(() => {
          this.location.back();
      });
  }

  get lessonForm() {
    return this.form.controls;
  }
}
