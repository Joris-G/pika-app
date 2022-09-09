import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProcess } from '../_interfaces/process.int';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProcessService {

  constructor(
    private http: HttpClient
  ) { }

  getProcesses(): Observable<IProcess[]> {
    return this.http.get<IProcess[]>(`${env.apiBaseUrl}processes/`);
  }
}
