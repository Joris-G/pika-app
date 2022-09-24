import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { shareReplay, tap, } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ILogin } from '../_interfaces/login.int';
import { IUser } from '../_interfaces/user.int';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private navCtrl: NavController,
  ) { }

  login(login: ILogin): Observable<IUser> {
    return this.http.post<IUser>(`${environment.apiBaseUrl}users/authenticate`, login)
      .pipe(
        tap(resp => {
          this.setSession(resp);
        }),
        shareReplay()
      );
  }

  logout() {
    sessionStorage.removeItem('id_token');
    this.navCtrl.navigateRoot('login');
    // sessionStorage.removeItem('expires_at');
  }

  isLoggedIn() {
    return this.getAuthorizationToken() !== null;
  }
  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = sessionStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);
    return expiresAt;
  }

  getAuthorizationToken() {
    return sessionStorage.getItem('id_token');
  }

  private setSession(authResult) {
    console.log('object');
    // const expiresAt = new Date(authResult.expiresIn);

    sessionStorage.setItem('id_token', authResult.token);
    // sessionStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }





  // eslint-disable-next-line max-len
  // setAuthorizationToken() { return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY2MjAzNjg0MywiZXhwIjoxNjYyNjQxNjQzfQ.3sr4xaS3PSLOL2FpsTqfQE30HCz1aIYfT6CpOUFjTCs'; }
}
