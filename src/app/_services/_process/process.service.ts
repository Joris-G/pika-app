import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { Socket } from 'ngx-socket-io';
import { IProcess, ICreateProcess } from 'src/app/_interfaces/process.int';

@Injectable({
  providedIn: 'root'
})
export class ProcessService {

  public processes$: BehaviorSubject<IProcess[]> = new BehaviorSubject<IProcess[]>([]);
  public activeProcess$: Subject<IProcess> = new BehaviorSubject<IProcess>(null);
  constructor(
    private socket: Socket,
    private http: HttpClient
  ) {
    // this.updateProcesses();
    this.listenProcesses();
  }

  searchProcesses() {

  }

  createProcess(process: ICreateProcess) {
    return this.http.post<any>(`${env.apiBaseUrl}processes/`, process);
  }

  updateProcesses() {
    this.getProcesses()
      .subscribe({
        next: (processes: IProcess[]) => this.processes$.next(processes)
      });

  }

  setActiveProcess(activeProcess: IProcess) {
    this.activeProcess$.next(activeProcess);
    console.log('listen to active process changes');
    this.socket.on(`process/${activeProcess.id}`, async () => {
      console.log('je suis là');
      this.updateActiveProcess(activeProcess.id);
    });
  }

  getProcess(processId: string): Observable<IProcess> {
    const headers = new HttpHeaders()
      .set('return-mode', 'full');
    return this.http.get<IProcess>(`${env.apiBaseUrl}processes/${processId}`, { headers });
  }

  getProcesses(text?: string): Observable<IProcess[]> {
    let params = null;
    if (text) {
      params = {
        searchInput: text
      };
    }
    return this.http.get<IProcess[]>(`${env.apiBaseUrl}processes`, {
      params
    });
  }

  private updateActiveProcess(idProcess) {
    this.getProcess(idProcess).subscribe({
      next: (process: IProcess) => {
        this.activeProcess$.next(process);
        console.log('active process updated');
      }
    });
  }


  private listenProcesses() {
    this.socket.on('process', async () => {
      console.log('processes updated');
      this.updateProcesses();
    });
  }
}
