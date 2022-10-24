import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICreateSubOperation } from 'src/app/_interfaces/suboperation.int';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubOperationService {

  constructor(
    private http: HttpClient,
  ) { }
  getSubOperation(id?: number) {

  }
  addSubOpe(subOperation: ICreateSubOperation): Observable<void> {
    return this.http.post<any>(`${env.apiBaseUrl}suboperations/`, subOperation);
  }
}
