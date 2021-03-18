import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { AdministrativePermission } from '../models/AdministrativePermission';
import { OperationalPermission } from '../models/OperationalPermission';

@Injectable({
  providedIn: 'root'
})
export class AbstractPermissionService {
  ADMIN_PERMISSION_API = environment.API_HOST+ '/admin-grants';
  OPERATIONAL_PERMISSION_API = environment.API_HOST+ '/operational-grants';

  constructor(private http: HttpClient) { }

  loadAdminPermissions(){
    return this.http.get<AdministrativePermission[]>(this.ADMIN_PERMISSION_API);
  }
  createAdminPermissions(ap: AdministrativePermission){
    return this.http.post<AdministrativePermission>(this.ADMIN_PERMISSION_API, ap);
  }  
  updateAdminPermissions(ap: AdministrativePermission){
    return this.http.put<AdministrativePermission>(this.ADMIN_PERMISSION_API+'/'+ap.id, ap);
  }
  deleteAdminPermissions(ap: AdministrativePermission){
    return this.http.delete(this.ADMIN_PERMISSION_API+'/'+ ap.id);
  }

  //////

  loadOperationalPermissions(){
    return this.http.get<OperationalPermission[]>(this.OPERATIONAL_PERMISSION_API);
  }
  createOperationalPermissions(ap: OperationalPermission){
    return this.http.post<OperationalPermission>(this.OPERATIONAL_PERMISSION_API, ap);
  }  
  updateOperationalPermissions(ap: OperationalPermission){
    return this.http.put<OperationalPermission>(this.OPERATIONAL_PERMISSION_API+'/'+ap.id, ap);
  }
  deleteOperationalPermissions(ap: OperationalPermission){
    return this.http.delete(this.OPERATIONAL_PERMISSION_API+'/'+ ap.id);
  }


}
