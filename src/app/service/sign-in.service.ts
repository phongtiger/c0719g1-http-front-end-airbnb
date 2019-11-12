import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ISignIn} from '../interface/i-sign-in';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  private readonly API_URL = 'http://localhost:8080';
  constructor(private http: HttpClient) { }
  createAcc(user: Partial<ISignIn>): Observable<ISignIn> {
    return this.http.post<ISignIn>(`${this.API_URL}/list`, user);
  }
  getAcc(): Observable<ISignIn[]> {
    return this.http.get<ISignIn[]>(`${this.API_URL}/list`);
  }
}
