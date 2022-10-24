import { Component } from '@angular/core';
import { ProcessService } from 'src/app/_services/_process/process.service';


@Component({
  selector: 'app-process',
  templateUrl: './process.page.html',
  styleUrls: ['./process.page.scss'],
})
export class ProcessPage {

  constructor(
    private processService: ProcessService
  ) { }

  ionViewWillEnter() {
    this.processService.updateProcesses();
  }


}
