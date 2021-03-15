import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { map } from 'rxjs/operators';
import { AcceptedDevice, Context, HOLocation, HOPeriod } from '../models/Contexts';

@Injectable({
  providedIn: 'root'
})
export class ContextService {
  LOCATIONS_API = environment.API_HOST+ '/locations';
  DEVICES_API = environment.API_HOST+ '/accepted-devices';
  PERIODS_API = environment.API_HOST+ '/periods';
  CONTEXTS_API = environment.API_HOST+ '/contexts';

  constructor(private http: HttpClient) { }

  loadLocations(){
    return this.http.get<HOLocationsWrapper>(this.LOCATIONS_API).pipe(
      map(w => w._embedded.hOLocations)
    )
  }
  createLocation(location: HOLocation){
    return this.http.post<HOLocation>(this.LOCATIONS_API, location);
  }  
  updateLocation(location: HOLocation){
    return this.http.put<HOLocation>(this.LOCATIONS_API+'/'+location.id, location);
  }
  deleteLocation(location: HOLocation){
    return this.http.delete(this.LOCATIONS_API+'/'+ location.id);
  }

 loadDevices(){
    return this.http.get<DevicesWrapper>(this.DEVICES_API).pipe(
      map(w => w._embedded.acceptedDevices)
    )
  }
  createDevice(app: AcceptedDevice){
    return this.http.post<AcceptedDevice>(this.DEVICES_API, app);
  }  
  updateDevice(app: AcceptedDevice){
    return this.http.put<AcceptedDevice>(this.DEVICES_API+'/'+ app.id, app);
  }
  deleteDevice(app: AcceptedDevice){
    return this.http.delete(this.DEVICES_API+'/'+ app.id);
  }

  /////
  loadPeriods(){
    return this.http.get<PeriodsWrapper>(this.PERIODS_API).pipe(
      map(w => w._embedded.hOPeriods)
    )
  }
  createPeriod(app: HOPeriod){
    return this.http.post<HOPeriod>(this.PERIODS_API, app);
  }  
  updatePeriod(app: HOPeriod){
    return this.http.put<HOPeriod>(this.PERIODS_API+'/'+ app.id, app);
  }
  deletePeriod(app: HOPeriod){
    return this.http.delete(this.PERIODS_API+'/'+ app.id);
  }

  /////
  loadContexts(){
    return this.http.get<Context[]>(this.CONTEXTS_API);
  }
  createContext(app: Context){
    return this.http.post<Context>(this.CONTEXTS_API, app);
  }  
  updateContext(app: Context){
    return this.http.put<Context>(this.CONTEXTS_API+'/'+ app.id, app);
  }
  deleteContext(app: Context){
    return this.http.delete(this.CONTEXTS_API+'/'+ app.id);
  }
}
export class HOLocationsWrapper{
  _embedded!: { hOLocations: HOLocation[]};
}

export class DevicesWrapper{
  _embedded!: { acceptedDevices: AcceptedDevice[]};
}

export class PeriodsWrapper{
  _embedded!: { hOPeriods: HOPeriod[]};
}
