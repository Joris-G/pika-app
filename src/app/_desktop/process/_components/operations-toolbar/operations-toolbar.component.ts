import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CreateOperationComponent } from '../create-operation/create-operation.component';

@Component({
  selector: 'app-operations-toolbar',
  templateUrl: './operations-toolbar.component.html',
  styleUrls: ['./operations-toolbar.component.scss'],
})
export class OperationsToolbarComponent implements OnInit {

  constructor(
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() { }


  async addOperationClick() {
    const createOperationModal = await this.modalCtrl.create({
      component: CreateOperationComponent,
    });
    createOperationModal.onDidDismiss().then(() => { });
    await createOperationModal.present();
  }
}
