import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICreateOperation } from '../_interfaces/operation.int';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OperationService {

  constructor(
    private http: HttpClient
  ) { }
  addOperation(operation: ICreateOperation): Observable<any> {
    return this.http.post<any>(`${env.apiBaseUrl}operations/`, operation);
  }
  removeOperation(operationId): Observable<void> {
    return this.http.delete<any>(`${env.apiBaseUrl}operations/${operationId}`);
  }
}
