import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Message } from '../common/message';

@Injectable({
  providedIn: 'root'
})
export class DashService {
  apiUrl =environment.apiUrl;

  constructor(private http: HttpClient) { }

  postCount() {
    return this.http.get<number>(`${this.apiUrl}posts/resource/count`)
  }

  lessonCount() {
    return this.http.get<number>(`${this.apiUrl}lessons/resource/count`)
  }
  courseCount() {
    return this.http.get<number>(`${this.apiUrl}courses/resource/count`)
  }
  categoryCount() {
    return this.http.get<number>(`${this.apiUrl}categories/resource/count`)
  }

  messageCount() {
    return this.http.get<Message[]>(this.apiUrl+'students/unread/messages')
  }

}
