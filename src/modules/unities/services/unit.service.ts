import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { AdminUnit } from '../models/AdminUnit';
import { map, catchError } from 'rxjs/operators';
import { OperationalUnit } from '../models/OperationalUnit';
import { Subordinate } from '../models/Subordinate';
import { PlaceUnder } from '../models/PlaceUnder';
import { OrgTree } from '../models/OrgTree';
import { OrgUnit } from '../models/OrgUnit';

@Injectable({
  providedIn: 'root'
})
export class UnitService {

  ADMIN_UNITS_API = environment.API_HOST+ '/admin-units';
  UNITS_API = environment.API_HOST + '/org-units?size=100';
  OPERATIONAL_UNITS_API = environment.API_HOST+ '/operational-units';
  SUBORDINATE_UNITS_API = environment.API_HOST+ '/subordinates';
  SUBORDINATE_MANY_UNITS_API = environment.API_HOST+ '/subordinates/many';
  PLACEUNDER_MANY_UNITS_API = environment.API_HOST+ '/place-unders/many';
  PLACEUNDER_UNITS_API = environment.API_HOST+ '/place-unders';
  ORGTREE_API = environment.API_HOST+ '/tree/organization';

  constructor(private http: HttpClient) { }

  loadAdminUnits(){
    return this.http.get<AdministrativeUnitsWrapper>(this.ADMIN_UNITS_API).pipe(
      map(w => w._embedded.administrativeUnits)
    );
  }

  loadUnits() {
    return this.http.get<UnitsWrapper>(this.UNITS_API).pipe(
      map(w => mergeArrays(w._embedded.operationalUnits, w._embedded.administrativeUnits))
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
  loadPlaceUnders(){
    return this.http.get<PlaceUnder[]>(this.PLACEUNDER_UNITS_API);
  }
    
  createSuborniate(sub: Subordinate){
    return this.http.post<Subordinate>(this.SUBORDINATE_UNITS_API, sub);
  }
  createManySubornates(sub: Subordinate[]){
    return this.http.post<Subordinate[]>(this.SUBORDINATE_MANY_UNITS_API, sub);
  }
  createManyPlaceUnders(sub: PlaceUnder[]){
    return this.http.post<PlaceUnder[]>(this.PLACEUNDER_MANY_UNITS_API, sub);
  }
  updateSubordinate(sub: Subordinate){
    return this.http.put<Subordinate>(this.SUBORDINATE_UNITS_API+'/'+sub.id, sub);
  }
  
  deleteSubordinate(sub: Subordinate){
    return this.http.delete(this.SUBORDINATE_UNITS_API+'/'+ sub.id);
  }
  
  deletePlaceUnder(sub: PlaceUnder){
    return this.http.delete(this.PLACEUNDER_UNITS_API+'/'+ sub.id);
  }
  getOrgTree(orgId: number){
    return this.http.get<OrgTree>(this.ORGTREE_API+'/'+ orgId);
  }
}
export class OperationalUnitsWrapper{
_embedded!: { operationalUnits: OperationalUnit[]};
}
export class AdministrativeUnitsWrapper{
  _embedded!: { administrativeUnits: AdminUnit[]};
}

export class UnitsWrapper{
  _embedded!: { 
      administrativeUnits: AdminUnit[];
      operationalUnits: OperationalUnit [];
  };
}

function mergeArrays<T>(arr1: T[], arr2: T[]): T[] {
  const mergedArray: T[] = [];
  mergedArray.push(...arr1);
  mergedArray.push(...arr2);
  return mergedArray;
}