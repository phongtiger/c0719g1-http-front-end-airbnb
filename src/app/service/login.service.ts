import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IRole} from '../interface/i-role';
import {Observable} from 'rxjs';
import {ISignIn} from '../interface/i-sign-in';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly API_URL = 'http://localhost:8080';
  constructor(private http: HttpClient) { }
  login(user: Partial<ISignIn>): Observable<ISignIn> {
    return this.http.post<ISignIn>(`${this.API_URL}/login`, user);
  }
}
