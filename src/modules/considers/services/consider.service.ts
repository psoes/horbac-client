import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Consider } from '../models/Consider';

@Injectable({
  providedIn: 'root'
})
export class ConsiderService {

  CONSIDERS_API = environment.API_HOST+ '/considers';

  constructor(private http: HttpClient) { }

  loadConsiders(){
    return this.http.get<Consider[]>(this.CONSIDERS_API);
  }

  createConsider(act: Consider) {
    return this.http.post<Consider>(this.CONSIDERS_API, act);
  }
  
  updateConsider(act: Consider) {
    return this.http.put<Consider>(this.CONSIDERS_API, act);
  }
  deleteConsider(act: Consider) {
    return this.http.delete(this.CONSIDERS_API+'/'+act.id);
  }
}
