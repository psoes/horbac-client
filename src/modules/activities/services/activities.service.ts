import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Activities } from '../models/activities';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  ACTIVITIES_API = environment.API_HOST+ '/activities';

  constructor(private http: HttpClient) { }

  loadActivities(){
    return this.http.get<Activities[]>(this.ACTIVITIES_API);
  }

  createActivities(act: Activities) {
    return this.http.post<Activities>(this.ACTIVITIES_API, act);
  }
  
  updateActivities(act: Activities) {
    return this.http.put<Activities>(this.ACTIVITIES_API, act);
  }
  deleteActivities(act: Activities) {
    return this.http.delete(this.ACTIVITIES_API+'/'+act.id);
  }

}
