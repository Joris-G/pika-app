import { Injectable } from '@angular/core';
import { Subject, Observable, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { IProcess } from 'src/app/_interfaces/process.int';
import { ProcessService } from './process.service';

@Injectable({
  providedIn: 'root'
})
export class SearchProcessService {
  public searchProcessInput: Subject<string> = new Subject();
  public searchedProcesses: Subject<IProcess[]> = new Subject();
  private searchProcessInput$: Observable<string>;
  constructor(
    private processService: ProcessService
  ) {
    this.searchProcessInput$ = this.searchProcessInput.asObservable();
    this.searchProcessInput$.pipe(

      // if character length greater then 2
      filter(res => res.length > 2)

      // Time in milliseconds between key events
      , debounceTime(1000)

      // If previous query is diffent from current
      , distinctUntilChanged()

      , switchMap((text) => this.processService.getProcesses(text))
    )
      .subscribe((resp: IProcess[]) => {
        this.searchedProcesses.next(resp);
      });
  }
}
