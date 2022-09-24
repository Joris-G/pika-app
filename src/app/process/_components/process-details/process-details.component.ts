import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, tap } from 'rxjs';
import { IProcess } from '../../_interfaces/process.int';
import { ProcessService } from '../../_services/process.service';

@Component({
  selector: 'app-process-details',
  templateUrl: './process-details.component.html',
  styleUrls: ['./process-details.component.scss'],
})
export class ProcessDetailsComponent implements OnInit, OnChanges {
  public process$: Subject<IProcess>;
  constructor(
    private router: Router,
    private processService: ProcessService
  ) {
    this.process$ = this.processService.activeProcess$;
    this.processService.activeProcess$.subscribe((test) => console.log(test));
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit() {
    const processId = this.router.url.split('/').pop();
    this.processService.getProcess(processId)
      .subscribe(
        process => this.processService.setActiveProcess(process)
      );
  }

}
