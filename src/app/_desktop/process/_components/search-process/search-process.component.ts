import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProcess } from 'src/app/_interfaces/process.int';
import { SearchProcessService } from 'src/app/_services/_process/search-process.service';

@Component({
  selector: 'app-search-process',
  templateUrl: './search-process.component.html',
  styleUrls: ['./search-process.component.scss'],
})
export class SearchProcessComponent {
  processResults$: Observable<IProcess[]>;
  constructor(
    private searchProcessService: SearchProcessService,
  ) {
    this.processResults$ = this.searchProcessService.searchedProcesses.asObservable();
  }

  onInput(e: any) {
    this.searchProcessService.searchProcessInput.next(e.target.value);
  }
}
