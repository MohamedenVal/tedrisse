import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category.model';
import { PaginatedCategory } from '../models/paginated-category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  catsApi = environment.apiUrl + 'categories'

  constructor(private http: HttpClient) { }

  getCategories(): Observable<PaginatedCategory> {
    return this.http.get<PaginatedCategory>(this.catsApi)
  }

  getCategory(id: string): Observable<Category> {
    return this.http.get<Category>(`${this.catsApi}/${id}`);
  }

  createCategory(categoryFormData: FormData): Observable<Category> {
    return this.http.post<Category>(this.catsApi, categoryFormData);
  }

  updateCategory(categoryFormData: FormData, id: string): Observable<Category> {
    return this.http.put<Category>(`${this.catsApi}/${id}`, {
      'title': categoryFormData.get('title'),
      'keys': categoryFormData.get('keys'),
    });
  }

  deleteCategory(id: string): Observable<any> {
    return this.http.delete(`${this.catsApi}/${id}`);
  }

}
