import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {JwtResponse} from '../interface/JwResponse';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly API_URL = 'http://localhost:8080';
  constructor(private http: HttpClient) { }
  // login(user: AuthLoginInfo): Observable<JwtResponse> {
  //   return this.http.post<JwtResponse>(`${this.API_URL}/api/auth/signin`, user);
  // }
}
