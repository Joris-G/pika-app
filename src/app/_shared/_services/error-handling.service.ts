import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingService {
  private message: string;

  constructor() { }
  handleError(params: any, err: any) {
    switch (err.status) {
      case 500:
        // TODO créer le message type popup à l'utilisateur
        this.message = 'Erreur interne au serveur';
        break;
      case 404:
        this.message = 'Page introuvable';
        break;
      default:
        break;
    }
    return throwError(this.message);
  }
}
