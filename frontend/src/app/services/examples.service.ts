import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Example } from '../models/example.model';

@Injectable({
  providedIn: 'root'
})
export class ExamplesService {
  examplesUrl = environment.apiUrl + 'examples';

  constructor(
    private http: HttpClient,
  ) { }

  getExamples() {
    return this.http.get<Example[]>(`${this.examplesUrl}`);
  }

  getExample(id: string) {
    return this.http.get<Example>(`${this.examplesUrl}/${id}`);
  }

  createExample(exampleFormData: FormData) {
    return this.http.post<Example>(`${this.examplesUrl}`, exampleFormData);
  }

  updateExample(exampleFormData: FormData, id: string) {
    return this.http.put<Example>(`${this.examplesUrl}/${id}`, exampleFormData);
  }

  deleteExample(id: string) {
    return this.http.delete<any>(`${this.examplesUrl}/${id}`);
  }
}
