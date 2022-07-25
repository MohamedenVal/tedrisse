import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from "rxjs/operators";
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
      .pipe(
        retry(3), // retry failed request up to 3 times
        catchError(this.handleError)
      )
  }

  getCourse(id: string): Observable<Course> {
    return this.http.get<Course>(`${this.coursesApi}/${id}`)
      .pipe(
        retry(3), // retry failed request up to 3 times
        catchError(this.handleError)
      );
  }

  createCourse(courseFormData: FormData): Observable<Course> {
    return this.http.post<Course>(this.coursesApi, courseFormData)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateCourse(courseFormData: FormData, id: string): Observable<Course> {
    return this.http.put<Course>(`${this.coursesApi}/${id}`, {
        'name': courseFormData.get('name'),
        'image': courseFormData.get('image'),
        'description': courseFormData.get('description'),
      }).pipe(
        catchError(this.handleError)
      );
  }

  deleteCourse(id: string): Observable<any> {
    return this.http.delete(`${this.coursesApi}/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0 ) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }

    // Return an observable with a user-facing error message
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
