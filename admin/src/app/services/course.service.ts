import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Course } from '../models/course.model';
import { PaginatedCourse } from '../models/paginated-course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  coursesApi = environment.apiUrl + 'courses'

  constructor(private http: HttpClient) { }

  getCourses(): Observable<PaginatedCourse> {
    return this.http.get<PaginatedCourse>(this.coursesApi)
  }

  getCourse(id: string): Observable<Course> {
    return this.http.get<Course>(`${this.coursesApi}/${id}`);
  }

  createCourse(courseFormData: FormData): Observable<Course> {
    return this.http.post<Course>(this.coursesApi, courseFormData);
  }

  updateCourse(courseFormData: FormData, id: string): Observable<Course> {
    return this.http.put<Course>(`${this.coursesApi}/${id}`, {
      'name': courseFormData.get('name'),
      'image': courseFormData.get('image'),
      'description': courseFormData.get('description'),
    });
  }

  deleteCourse(id: string): Observable<any> {
    return this.http.delete(`${this.coursesApi}/${id}`);
  }
}
