import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ISignIn} from '../interface/i-sign-in';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  private readonly API_URL = 'http://localhost:8080';
  constructor(private http: HttpClient) { }
  createAcc(user: Partial<ISignIn>): Observable<ISignIn> {
    return this.http.post<ISignIn>(`${this.API_URL}/api/auth/signup`, user);
  }
}
