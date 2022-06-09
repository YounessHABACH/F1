import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {api, URLS} from "../../environments/environment";
import {Observable} from "rxjs";
import {Agent} from "../models/agent";

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  constructor(private http: HttpClient) { }

  getAgents(): Observable<Agent[]>{
    return this.http.get<Agent[]>(URLS.AGENTS_ALL_HOST);
  }

  getAgentById(id: number): Observable<Agent> {
    return this.http.get<Agent>(URLS.AGENTS_GET_HOST + id)
  }

  deleteById(id: number) {
    return this.http.delete<void>(URLS.AGENT_DEL_HOST + id)
  }
}
