import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Activity } from '../models/Activity';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  ACTIVITIES_API = environment.API_HOST+ '/activities';

  constructor(private http: HttpClient) { }

  loadActivities(){
    return this.http.get<Activity[]>(this.ACTIVITIES_API);
  }

  createActivities(act: Activity ) {
    return this.http.post<Activity >(this.ACTIVITIES_API, act);
  }
  
  updateActivities(act: Activity ) {
    return this.http.put<Activity >(this.ACTIVITIES_API, act);
  }
  deleteActivities(act: Activity ) {
    return this.http.delete(this.ACTIVITIES_API+'/'+act.id);
  }

}
