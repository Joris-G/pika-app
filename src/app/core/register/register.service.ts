import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorHandlingService } from 'src/app/_shared/_services/error-handling.service';
import { environment as env } from 'src/environments/environment';
import { IRegisterUser } from '../_interfaces/user.int';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(
    private http: HttpClient,
    private errorHandlingService: ErrorHandlingService
  ) { }
  register(regUser: IRegisterUser): Observable<any> {
    const username = `${regUser.firstname.charAt(0)}.${regUser.lastname}`;
    regUser.username = username;
    return this.http.post(`${env.apiBaseUrl}users/register`, regUser)
      .pipe(
        catchError(error => this.errorHandlingService.handleError(
          {
            message: `Erreur pendant l'enregistrement de l'utilisateur`,
            objectToSend: regUser,
          },
          error)
        )
      );
  }

}
