import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable, Subject, } from 'rxjs';
import { ProcessService } from 'src/app/_services/_process/process.service';
import { IProcess } from '../../../../_interfaces/process.int';


@Component({
  selector: 'app-process-details',
  templateUrl: './process-details.component.html',
  styleUrls: ['./process-details.component.scss'],
})
export class ProcessDetailsComponent {
  public process$: Observable<IProcess>;
  constructor(
    private router: Router,
    private processService: ProcessService,
  ) {
    this.process$ = this.processService.activeProcess$.asObservable();
  }
  ionViewDidEnter() {
    const processId = this.router.url.split('/').pop();
    this.processService.getProcess(processId)
      .subscribe(
        (process: IProcess) => {
          console.log('init active process', process);
          this.processService.setActiveProcess(process);
        }
      );
  }
}
