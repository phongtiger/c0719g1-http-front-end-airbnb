import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IPass} from '../interface/i-pass';

@Injectable({
  providedIn: 'root'
})
export class PassService {

  private readonly API_URL = 'http://localhost:8080';
  constructor(private http: HttpClient) { }
  getOneAcc(id: number): Observable<IPass> {
    return this.http.get<IPass>(`${this.API_URL}/user/${id}`);
  }

  updateAcc(user: Partial<IPass>): Observable<IPass> {
    const r = confirm('Ban chac chan muon cap nhat?\n Chon OK hoac Cancel!');
    if (r) {
      return this.http.put<IPass>(`${this.API_URL}/user/edit/${user.id}`, user);
    }
  }
}
