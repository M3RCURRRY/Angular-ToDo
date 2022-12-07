import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { authEnviroment } from 'src/enviroments/enviroment';
import { Router } from '@angular/router';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl: string = `${authEnviroment.backendOrigin}/auth`;

  constructor(private http: HttpClient, private routes: Router) {}

  login(email: string, password: string) {
    return this.http
      .post<{ token: string }>(`${this.baseUrl}/login`, { email, password })
      .pipe(
        map((res) => {
          if (res.token) {
            localStorage.setItem('auth_token', res.token);
            this.routes.navigate(['']);
          }
          return null;
        })
      );
  }

  get isAuthed(): boolean {
    const token = localStorage.getItem('auth_token');
    return !!token;
  }

  get token(): string | null {
    return localStorage.getItem('auth-token');
  }

  logout() {
    localStorage.removeItem('auth_token');
    this.routes.navigate(['login']);
  }
}
