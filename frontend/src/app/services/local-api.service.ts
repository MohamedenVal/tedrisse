import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalApiService {

  constructor() { }

  getResource(resource: string) {
    const rawString = localStorage.getItem(resource);
    if(rawString){
      return JSON.parse(rawString);
    } else {
      return undefined;
    }
  }

  setResource(resource: string, data: any) {
    // let now = new Date();
    // localStorage.setItem('time', JSON.stringify(now))
    localStorage.setItem(resource, JSON.stringify(data))
  }

}
