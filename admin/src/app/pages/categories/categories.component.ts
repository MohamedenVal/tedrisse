import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  cats: Category[] = [];

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.getCategories();
    console.log(this.cats);

  }

  private getCategories() {
    this.categoriesService.getCategories()?.subscribe( (response) => {
      this.cats = response.data;
    });
  }

  deleteCategory(id: string) {
    this.categoriesService.deleteCategory(id)
      .subscribe((response) => {
        this.getCategories();
      }, (err) => {
        console.log(err);

      })
  }

}
