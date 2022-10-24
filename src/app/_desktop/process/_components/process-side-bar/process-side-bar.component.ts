import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CreateProcessComponent } from '../create-process/create-process.component';

@Component({
  selector: 'app-process-side-bar',
  templateUrl: './process-side-bar.component.html',
  styleUrls: ['./process-side-bar.component.scss'],
})
export class ProcessSideBarComponent implements OnInit {

  constructor(
    private modalCtrl: ModalController,

  ) { }

  ngOnInit() { }
  async newProcessClick() {
    const createProcessForm = await this.modalCtrl.create({ component: CreateProcessComponent });
    createProcessForm.present();
  }
}
