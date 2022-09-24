import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { IRegisterUser, IUser } from '../_interfaces/user.int';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  registerSuccess$ = new Subject<boolean>();
  constructor(
    private http: HttpClient,
  ) { }
  register(regUser: IRegisterUser): Observable<IUser> {
    const username = `${regUser.firstname.charAt(0)}.${regUser.lastname}`;
    regUser.username = username;
    return this.http.post<IUser | any>(`${env.apiBaseUrl}users/register`, regUser);
  }
}
