import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { LocalstorageService } from './localstorage.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authApi = environment.apiUrl + 'admin'

  constructor(
    private http: HttpClient,
    private tokenService: LocalstorageService,
    private router: Router
  ) { }

  login(email: string, password: string): Observable<any> {

    return this.http.post<any>(`${this.authApi}/login`, {
      'email': email,
      "password": password
    });
  }

  logout() {
    this.http.post<any>(`${this.authApi}/logout`, {}).subscribe((res) => {
      this.tokenService.removeToken();
      this.router.navigate(['/login']);
    })
  }


  isLoggedIn() {
    const token = this.tokenService.getToken(); // get token from local storage
    if (token) {
      for (let index = 0; index < 99; index++) {
        if (token.startsWith(index + '|')) {
          return true;
        }
      }
    }
    this.router.navigate(['/login']);
    return false;
  }

  private _tokenExpired(expiration: number): boolean {
    console.log(expiration);

    return Math.floor(new Date().getTime() / 60000 ) >= expiration;
  }
}
