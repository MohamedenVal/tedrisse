import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PaginatedPost } from '../models/paginated-post.model';
import { Post } from '../models/post.model';

export interface Data {
  data: Post;
}
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  postApi = environment.apiUrl + 'posts'

  constructor(private http: HttpClient) { }

  getPosts(): Observable<PaginatedPost> {
    return this.http.get<PaginatedPost>(this.postApi)
      .pipe(
        retry(3), // retry failed request up to 3 times
        catchError(this.handleError)
      )
  }

  getPost(id: string): Observable<Data> {
    return this.http.get<Data>(`${this.postApi}/${id}`)
      .pipe(
        retry(3), // retry failed request up to 3 times
        catchError(this.handleError)
      )
  }

  createPost(postFormData: FormData): Observable<Post> {
    return this.http.post<Post>(this.postApi, postFormData)
      .pipe(
        catchError(this.handleError)
      )
  }

  updatePost(postFormData: FormData, id: string): Observable<Post> {
    return this.http.put<Post>(`${this.postApi}/${id}`, {
      title: postFormData.get('title'),
      content: postFormData.get('content'),
      category: postFormData.get('category'),
      author_id: '1',
    })
      .pipe(
        catchError(this.handleError)
      )
  }

  deletePost(id: string) {
    return this.http.delete(`${this.postApi}/${id}`)
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
