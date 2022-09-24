import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ICreateProcess, IProcess } from '../_interfaces/process.int';
import { environment as env } from 'src/environments/environment';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class ProcessService {

  public processes$: BehaviorSubject<IProcess[]> = new BehaviorSubject<IProcess[]>([]);
  public activeProcess$: Subject<IProcess> = new Subject<IProcess>();
  constructor(
    private socket: Socket,
    private http: HttpClient
  ) {
    // this.updateProcesses();
    this.listenProcesses();
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

  private updateActiveProcess(idProcess) {
    this.getProcess(idProcess).subscribe({
      next: (process: IProcess) => {
        this.activeProcess$.next(process);
        console.log('active process updated');
      }
    });
  }

  private getProcesses(): Observable<IProcess[]> {
    return this.http.get<IProcess[]>(`${env.apiBaseUrl}processes/`);
  }

  private listenProcesses() {
    this.socket.on('process', async () => {
      console.log('processes updated');
      this.updateProcesses();
    });
  }
}
