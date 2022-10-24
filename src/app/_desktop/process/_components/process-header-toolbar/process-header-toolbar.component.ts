import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-process-header-toolbar',
  templateUrl: './process-header-toolbar.component.html',
  styleUrls: ['./process-header-toolbar.component.scss'],
})
export class ProcessHeaderToolbarComponent implements OnInit {

  constructor(private actionSheetController: ActionSheetController) { }

  ngOnInit() { }

  async createActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      buttons: [
        {
          text: `Créer un process`,
        },
        {
          text: `Deconnexion`,
          icon: `exit-outline`,
          cssClass: ['button-native'],
        }
      ]
    });
    await actionSheet.present();
  }

}
