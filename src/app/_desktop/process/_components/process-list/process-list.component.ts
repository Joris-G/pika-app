import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { IProcess } from 'src/app/_interfaces/process.int';
import { ProcessService } from 'src/app/_services/_process/process.service';


@Component({
  selector: 'app-process-list',
  templateUrl: './process-list.component.html',
  styleUrls: ['./process-list.component.scss'],
})
export class ProcessListComponent implements OnInit {
  public processes$: Subject<IProcess[]>;
  constructor(
    private processService: ProcessService,
  ) { }

  ngOnInit() {
    this.processes$ = this.processService.processes$;
  }

}
