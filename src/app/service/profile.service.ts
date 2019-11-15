import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IProfile} from '../interface/i-profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private readonly API_URL = 'http://localhost:8080';
  constructor(private http: HttpClient) { }
  getOneAcc(id: number): Observable<IProfile> {
    return this.http.get<IProfile>(`${this.API_URL}/user/${id}`);
  }

  updateAcc(user: Partial<IProfile>): Observable<IProfile> {
    const r = confirm('Ban chac chan muon cap nhat?\n Chon OK hoac Cancel!');
    if (r) {
      return this.http.put<IProfile>(`${this.API_URL}/user/edit/${user.id}`, user);
    }
  }
}
