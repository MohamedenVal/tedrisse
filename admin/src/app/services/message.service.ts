import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Message } from 'src/app/models/message.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  msgApi = environment.apiUrl + 'students/messages';

  constructor(private http: HttpClient) { }

  getMessages() {
    return this.http.get<Message[]>(this.msgApi)
  }

  getMsg(id: string) {
    return this.http.get<Message>(`${this.msgApi}/${id}`)
  }

  deleteMsg(id: string) {
    this.http.delete<any>(`${this.msgApi}/${id}`)
  }

  setRead(id: string) {
    return this.http.post<Message>(`${environment.apiUrl}students/read/${id}`, { read: true})
  }

}
