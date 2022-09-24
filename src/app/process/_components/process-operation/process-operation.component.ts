import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IOperation } from 'src/app/process/_interfaces/operation.int';
import { OperationService } from '../../_services/operation.service';
import { CreateSubOperationComponent } from '../create-sub-operation/create-sub-operation.component';

@Component({
  selector: 'app-process-operation',
  templateUrl: './process-operation.component.html',
  styleUrls: ['./process-operation.component.scss'],
})
export class ProcessOperationComponent implements OnInit {
  @Input() operation: IOperation;
  public editable = false;
  public isSubOpeVisible = false;

  constructor(
    private operationService: OperationService,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() { }
  removeOperationClick() {
    this.operationService.removeOperation(this.operation.id)
      .subscribe({
        next: () => {
          console.log('operation supprimée avec succès');
        }
      });
  }
  async addSubOperationClick() {
    const modalCreateSubOpe = await this.modalCtrl.create({
      component: CreateSubOperationComponent,
      canDismiss: false,
      componentProps: {},
      // TODO voir pour créer une classe css pour mettre en forme les boites modal
      cssClass: 'modal-comp'
    });
    await modalCreateSubOpe.present();
  }
  switchEditModeClick() {
    this.editable = !this.editable;
    // this.operationService.
  }

  infoClick() {

  }
  toggleSubObeVisibility() {
    this.isSubOpeVisible = !this.isSubOpeVisible;
  }
}
