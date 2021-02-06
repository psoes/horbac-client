import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Action } from '../models/Action';

@Injectable({
  providedIn: 'root'
})
export class ActionsService {
  
  ACTIONS_API = environment.API_HOST+ '/actions';

  constructor(private http: HttpClient) { }

  loadActions(){
    return this.http.get<Action[]>(this.ACTIONS_API);
  }

  createActions(act: Action) {
    return this.http.post<Action>(this.ACTIONS_API, act);
  }
  
  updateActions(act: Action) {
    return this.http.put<Action>(this.ACTIONS_API, act);
  }
  deleteActions(act: Action) {
    return this.http.delete(this.ACTIONS_API+'/'+act.id);
  }

}
