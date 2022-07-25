import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Lesson } from '../models/lesson.model';
import { PaginatedLesson } from '../models/paginated-lesson.model';

export interface LessonData {
  data: Lesson;
}
@Injectable({
  providedIn: 'root'
})
export class LessonsService {
  lessonApi = environment.apiUrl + 'lessons';

  constructor(private http: HttpClient) { }

  getLessons() {
    return this.http.get<PaginatedLesson>(this.lessonApi)
  }
  getLesson(id: string): Observable<LessonData> {
    return this.http.get<LessonData>(`${this.lessonApi}/${id}`)
      .pipe(
        retry(3), // retry failed request up to 3 times
        catchError(this.handleError)
      )
  }

  createLesson(lessonFormData: FormData): Observable<Lesson> {
    return this.http.post<Lesson>(this.lessonApi, lessonFormData)
      .pipe(
        catchError(this.handleError)
      )
  }

  updateLesson(lessonFormData: FormData, id: string): Observable<Lesson> {
    return this.http.put<Lesson>(`${this.lessonApi}/${id}`, {
      title: lessonFormData.get('title'),
      content: lessonFormData.get('content'),
      category: lessonFormData.get('category'),
      author_id: '1',
    })
      .pipe(
        catchError(this.handleError)
      )
  }

  deleteLesson(id: string) {
    return this.http.delete(`${this.lessonApi}/${id}`)
      .pipe(
        catchError(this.handleError)
      )
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
