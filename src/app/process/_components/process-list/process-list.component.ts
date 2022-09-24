import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProcess } from 'src/app/process/_interfaces/process.int';
import { ProcessService } from '../../_services/process.service';


@Component({
  selector: 'app-process-list',
  templateUrl: './process-list.component.html',
  styleUrls: ['./process-list.component.scss'],
})
export class ProcessListComponent implements OnInit {
  public processes$: BehaviorSubject<IProcess[]>;
  constructor(
    private processService: ProcessService,
  ) { }

  ngOnInit() {
    this.processes$ = this.processService.processes$;
  }

}
