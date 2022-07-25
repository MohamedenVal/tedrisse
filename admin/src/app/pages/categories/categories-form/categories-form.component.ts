import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriesService } from 'src/app/services/categories.service';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { Message } from 'src/app/common/message';
import { timer } from 'rxjs';

@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.scss']
})
export class CategoriesFormComponent implements OnInit {
  form!: FormGroup;
  isSubmitted = false;
  editMode = false;
  catPramId = '';
  message?: Message;

  constructor(
    private formBuilder: FormBuilder,
    private categoriesService: CategoriesService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.initForm()

    this.checkEditMode()
  }

  private initForm() {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      keys: [''],
    })
  }

  onSubmit() {
    this.isSubmitted = true;
    if(this.form.invalid) return;

    const catFormData = new FormData();

    Object.keys(this.categoryForm).map( (key) => {
      catFormData.append(key, this.categoryForm[key].value);
    })

    if (this.editMode) {
      this.updateCategory(catFormData, this.catPramId);
    } else {
      this.createCategory(catFormData);
    }
  }

  private createCategory(categoryFormData: FormData) {
    this.categoriesService.createCategory(categoryFormData)
    .subscribe((res: Category) => {


      this.returnBack()
    }, (err) => {
      console.log(err);

      // this.message.content = err
    });
  }

  private updateCategory(categoryFormData: FormData, id: string) {
    this.categoriesService.updateCategory(categoryFormData, id)
      .subscribe( (response) => {


        this.returnBack();
      }, (err) => {
        console.log(err);

      })
  }

  private checkEditMode() {
    this.route.params.subscribe((params) => {
      if(params['id']) {
        this.editMode = true;
        this.catPramId = params['id'];

        this.categoriesService.getCategory(this.catPramId)
          .subscribe((category: Category) => {

            this.categoryForm['title'].setValue(category.title);
            this.categoryForm['keys'].setValue(category.keys);


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

  get categoryForm() {
    return this.form.controls;
  }
}
