import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ISignIn} from '../interface/i-sign-in';
import {Observable} from 'rxjs';
import {IRole} from '../interface/i-role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private readonly API_URL = 'http://localhost:8080/';
  constructor(private http: HttpClient) { }
  createAcc(user: Partial<IRole>): Observable<IRole> {
    return this.http.post<IRole>(`${this.API_URL}/role/{id}`, user);
  }
  getRole(): Observable<IRole[]> {
    return this.http.get<IRole[]>(`${this.API_URL}/role`);
  }
}
