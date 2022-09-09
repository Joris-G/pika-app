import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ILogin } from '../_interfaces/login.int';
import { IUser } from '../_interfaces/user.int';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
  ) { }
  login(login: ILogin): Observable<IUser> {
    return this.http.post<IUser>(`${environment.apiBaseUrl}users/authenticate`, login);
  }
  // eslint-disable-next-line max-len
  getAuthorizationToken() { return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY2MjAzNjg0MywiZXhwIjoxNjYyNjQxNjQzfQ.3sr4xaS3PSLOL2FpsTqfQE30HCz1aIYfT6CpOUFjTCs'; }
}
