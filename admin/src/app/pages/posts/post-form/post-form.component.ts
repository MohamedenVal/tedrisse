import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { timer } from 'rxjs';
import { PaginatedCategory } from 'src/app/models/paginated-category.model';
import { CategoriesService } from 'src/app/services/categories.service';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  form!: FormGroup;
  isSubmited = false;
  editMode = false;
  postId = '';
  // cats!: Observable<PaginatedCategory>;
  cats!: PaginatedCategory;
  selectedCat: string | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private postsService: PostsService,
    private categoriesService: CategoriesService,
    private location: Location,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.initForm()
    this.getCats()
    this.checkEditMode()

  }

  onSubmit() {
    this.isSubmited = true
    if (this.form.invalid) {
      return
    }

    const postFormData = new FormData();

    Object.keys(this.postForm).map((key) => {
      postFormData.append(key, this.postForm[key].value)
    })

    if (this.editMode) {
      this.updatePost(postFormData, this.postId)
    } else {
      this.createPost(postFormData)
    }

  }

  private getCats() {
    this.categoriesService.getCategories()
      .subscribe((res) => {
        this.cats = res
      })
  }

  private initForm() {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      category: [''],
      author_id: ['1']
    })
  }

  private checkEditMode() {

    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.editMode = true;
        this.postId = params['id'];

        this.postsService.getPost(this.postId)
          .subscribe((res) => {
            this.postForm['title'].setValue(res.data.title);
            this.postForm['content'].setValue(res.data.content);
            this.postForm['category'].setValue(res.data.category);
            // this.postForm['category'].setValidators([])
            // this.postForm['category'].updateValueAndValidity()

            this.selectedCat = res.data.category;
          })

      }
    })

  }

  private createPost(postFormData: FormData) {
    this.postsService.createPost(postFormData)
      .subscribe((res) => {
        this.returnBack()

      })
  }

  private updatePost(postFormData: FormData, id: string) {
    this.postsService.updatePost(postFormData, id)
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

  get postForm() {
    return this.form.controls;
  }
}
