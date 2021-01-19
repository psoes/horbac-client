import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { AdminUnit } from '../models/AdminUnit';

@Injectable({
  providedIn: 'root'
})
export class UnitService {

  ADMIN_UNITS_API = environment.API_HOST+ '/admin-units';

  constructor(private http: HttpClient) { }

  loadAdminUits(){
    return this.http.get<AdminUnit[]>(this.ADMIN_UNITS_API);
  }

  createAdminUnit(unit: AdminUnit){
    return this.http.post<AdminUnit>(this.ADMIN_UNITS_API, unit);
  }
  
  updateAdminUnit(unit: AdminUnit){
    return this.http.put<AdminUnit>(this.ADMIN_UNITS_API, unit);
  }

  deleteAdminUnit(unit: AdminUnit){
    return this.http.delete(this.ADMIN_UNITS_API+'/'+ unit.id);
  }


  public uploadImage(image: File): Observable<Object> {
    const formData = new FormData();

    formData.append('image', image);

    return this.http.post('/api/v1/image-upload', formData);
  }
}
