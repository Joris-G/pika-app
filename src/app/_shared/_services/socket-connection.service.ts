import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Socket } from 'ngx-socket-io';
import { SocketService } from 'src/app/core/_services/socket.service';

@Injectable({
  providedIn: 'root'
})
export class SocketConnectionService {

  constructor(
    private socket: Socket,
    private toastCtrl: ToastController
  ) {
    this.connection();
    this.listenConnection();
  }
  connection() {
    // this.socket.connect();
  }

  listenConnection() {
    console.log(this.socket);
    this.socket.on('connection', async (msg) => {
      console.log(msg);
      const toast = await this.toastCtrl.create(
        {
          header: 'Connection d\'un utilisateur',
          message: 'User c\'est connecté',
          duration: 10000,
          animated: true,
          keyboardClose: true,
        });
      await toast.present();
    });
  }
}
