import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingService {
  constructor(
    private alertCtrl: AlertController
  ) { }

  async handleError(params: any, err: any) {
    let errorType: string;
    switch (err.status) {
      case 500:
        errorType = 'Erreur interne au serveur';
        break;
      case 404:
        errorType = 'Page introuvable';
        break;
      default:
        break;
    }
    // TODO créer le message type popup à l'utilisateur
    const alert = await this.alertCtrl.create({
      header: `Erreur ${err.status} : ${errorType}`,
      message: `${params.message}`,
      buttons: [{
        text: 'OK',
        role: 'destructive',
        handler: (value) => {
          console.log(value);
          return true;
        }
      }]
    });
    alert.present();
  }
}
