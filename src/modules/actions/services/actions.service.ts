import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Actions } from '../models/actions';

@Injectable({
  providedIn: 'root'
})
export class ActionsService {
  
  ACTIONS_API = environment.API_HOST+ '/actions';

  constructor(private http: HttpClient) { }

  loadActions(){
    return this.http.get<Actions[]>(this.ACTIONS_API);
  }

  createActions(act: Actions) {
    return this.http.post<Actions>(this.ACTIONS_API, act);
  }
  
  updateActions(act: Actions) {
    return this.http.put<Actions>(this.ACTIONS_API, act);
  }
  deleteActions(act: Actions) {
    return this.http.delete(this.ACTIONS_API+'/'+act.id);
  }

}
