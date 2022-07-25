import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface Message {
  name: string;
  email: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  messageApi = environment.apiUrl + 'students/messages'

  constructor(private http: HttpClient) { }

  createMessgae(messageFormData: FormData) {
    return this.http.post<Message>(this.messageApi, messageFormData)
  }
}
