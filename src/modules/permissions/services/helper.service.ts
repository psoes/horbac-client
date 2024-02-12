import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrganizationComponent } from '@modules/organizations/components/organization';
import { Organization } from '@modules/organizations/models/organization';
import { environment } from 'environments/environment';
import { AdministrativePermission } from '../models/AdministrativePermission';
import { CanSuggest } from '../models/CanSuggest';
import { CanTreat } from '../models/CanTreat';
import { OperationalPermission } from '../models/OperationalPermission';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  ADMIN_HELPER_API = environment.API_HOST+ '/admin-helpers';
  OPERATIONAL_HELPER_API = environment.API_HOST+ '/operational-helpers';

  constructor(private http: HttpClient) { }

  canTreat(org: Organization, can: CanTreat){
    return this.http.post<AdministrativePermission[]>(this.ADMIN_HELPER_API+'/'+org.id, can) ;
  }
  canSuggest(org: Organization, can: CanSuggest){
    return this.http.post<OperationalPermission[]>(this.OPERATIONAL_HELPER_API+'/'+org.id, can) ;
  }
}

