import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CreateProcessComponent } from './_components/create-process/create-process.component';
import { ProcessService } from './_services/process.service';

@Component({
  selector: 'app-process',
  templateUrl: './process.page.html',
  styleUrls: ['./process.page.scss'],
})
export class ProcessPage {


  constructor(
    private modalCtrl: ModalController,
    private processService: ProcessService
  ) { }

  ionViewWillEnter() {
    this.processService.updateProcesses();
  }
  async newProcessClick() {
    const createProcessForm = await this.modalCtrl.create({ component: CreateProcessComponent });
    createProcessForm.present();
  }

}
