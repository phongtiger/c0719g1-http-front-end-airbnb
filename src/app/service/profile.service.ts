import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IProfile} from '../interface/i-profile';
import {JwtResponse} from '../interface/JwResponse';
import {IPass} from '../interface/i-pass';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private readonly API_URL = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  getOneAcc(id: number): Observable<IProfile> {
    return this.http.get<IProfile>(`${this.API_URL}/user/${id}`);
  }

  updateAcc(user: Partial<IProfile>): Observable<JwtResponse> {
    const r = confirm('Ban chac chan muon cap nhat?\n Chon OK hoac Cancel!');
    if (r) {
      return this.http.put<JwtResponse>(`${this.API_URL}/profile/edit`, user);
    }
  }

  updatePass(user: Partial<IPass>): Observable<JwtResponse> {
    const r = confirm('Ban chac chan muon cap nhat?\n Chon OK hoac Cancel!');
    if (r) {
      return this.http.put<JwtResponse>(`${this.API_URL}/profile/editPassword`, user);
    }
  }

  getOneAccToken(): Observable<IProfile> {
    return this.http.get<IProfile>(`${this.API_URL}/profile`);
  }

  getOnePassToken(): Observable<IPass> {
    return this.http.get<IPass>(`${this.API_URL}/profile`);
  }
}
