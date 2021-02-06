import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { AdminUnit } from '../models/AdminUnit';
import { map, catchError } from 'rxjs/operators';
import { OperationalUnit } from '../models/OperationalUnit';
import { Subordinate } from '../models/Subordinate';

@Injectable({
  providedIn: 'root'
})
export class UnitService {

  ADMIN_UNITS_API = environment.API_HOST+ '/admin-units';
  OPERATIONAL_UNITS_API = environment.API_HOST+ '/operational-units';
  SUBORDINATE_UNITS_API = environment.API_HOST+ '/subordinates';

  constructor(private http: HttpClient) { }

  loadAdminUnits(){
    return this.http.get<AdministrativeUnitsWrapper>(this.ADMIN_UNITS_API).pipe(
      map(w => w._embedded.administrativeUnits)
    );
  }

  createAdminUnit(unit: AdminUnit){
    return this.http.post<AdminUnit>(this.ADMIN_UNITS_API, unit);
  }
  
  updateAdminUnit(unit: AdminUnit){
    return this.http.put<AdminUnit>(this.ADMIN_UNITS_API+'/'+unit.id, unit);
  }

  deleteAdminUnit(unit: AdminUnit){
    return this.http.delete(this.ADMIN_UNITS_API+'/'+ unit.id);
  }


  public uploadImage(image: File): Observable<Object> {
    const formData = new FormData();

    formData.append('image', image);

    return this.http.post('/api/v1/image-upload', formData);
  }

  loadOperationalUnits(){
    return this.http.get<OperationalUnitsWrapper>(this.OPERATIONAL_UNITS_API).pipe(
      map(w =>w._embedded.operationalUnits)
    );
  }
  
  createOperationalUnit(unit: OperationalUnit){
    return this.http.post<OperationalUnit>(this.OPERATIONAL_UNITS_API, unit);
  }
  
  updateOperationalUnit(unit: OperationalUnit){
    return this.http.put<OperationalUnit>(this.OPERATIONAL_UNITS_API+'/'+unit.id, unit);
  }
  
  deleteOperationalUnit(unit: OperationalUnit){
    return this.http.delete(this.OPERATIONAL_UNITS_API+'/'+ unit.id);
  }
  loadSubordinates(){
    return this.http.get<Subordinate[]>(this.SUBORDINATE_UNITS_API);
  }
  
  createSuborniate(sub: Subordinate){
    return this.http.post<Subordinate>(this.SUBORDINATE_UNITS_API, sub);
  }
  
  updateSubordinate(sub: Subordinate){
    return this.http.put<Subordinate>(this.SUBORDINATE_UNITS_API+'/'+sub.id, sub);
  }
  
  deleteSubordinate(sub: Subordinate){
    return this.http.delete(this.SUBORDINATE_UNITS_API+'/'+ sub.id);
  }
  
}
export class OperationalUnitsWrapper{
_embedded!: { operationalUnits: OperationalUnit[]};
}
export class AdministrativeUnitsWrapper{
  _embedded!: { administrativeUnits: AdminUnit[]};
}

