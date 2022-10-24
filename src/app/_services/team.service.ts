import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ITeam } from '../_interfaces/team.int';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(
    private http: HttpClient
  ) { }
  getAllTeams(): Observable<ITeam[]> {
    return this.http.get<ITeam[]>(`${environment.apiBaseUrl}teams`);
  }
}
