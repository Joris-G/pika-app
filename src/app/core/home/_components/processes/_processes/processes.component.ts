import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { IProcess } from 'src/app/core/_interfaces/process.int';
import { ProcessService } from 'src/app/core/_services/process.service';
import { CreateProcessComponent } from '../create-process/create-process.component';

@Component({
  selector: 'app-processes',
  templateUrl: './processes.component.html',
  styleUrls: ['./processes.component.scss'],
})
export class ProcessesComponent implements OnInit {
  public processes$: Observable<IProcess[]>;
  constructor(
    private processService: ProcessService,
    private modalCtrl: ModalController
  ) { }
  ngOnInit() {
    this.processes$ = this.processService.getProcesses();
  }
  newProcessClick() {
    const createProcessForm = this.modalCtrl.create({ component: CreateProcessComponent });
    createProcessForm.then((elem) => {
      elem.present();

    });
  }
}
