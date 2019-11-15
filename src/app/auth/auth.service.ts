import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {JwtResponse} from '../interface/JwResponse';
import {ISignIn} from '../interface/i-sign-in';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

class SignUpInfo {
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'http://localhost:8080/api/auth/signin';
  private signupUrl = 'http://localhost:8080/api/auth/signup';

  constructor(private http: HttpClient) {
  }
  attemptAuth(credentials: ISignIn): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }
  signUp(info: SignUpInfo): Observable<string> {
    return this.http.post<string>(this.signupUrl, info, httpOptions); }
}
