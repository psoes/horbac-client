import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Organization } from '../models/organization';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  ORGANIZATIONS_API = environment.API_HOST+ 'organizations';

  constructor(private http: HttpClient) { }

  loadOrganizations(){
    return this.http.get<Organization[]>(this.ORGANIZATIONS_API);
  }

  createOrganization(org: Organization){
    return this.http.post<Organization>(this.ORGANIZATIONS_API, org);
  }
  
  updateOrganization(org: Organization){
    return this.http.put<Organization>(this.ORGANIZATIONS_API, org);
  }

  deleteOrganization(org: Organization){
    return this.http.delete(this.ORGANIZATIONS_API+'/'+ org.id);
  }
}
