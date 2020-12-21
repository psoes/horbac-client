import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Organization } from '../models/organization';
import { OrganizationType } from '../models/organization-type';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  ORGANIZATIONS_API = environment.API_HOST+ '/organizations';
  ORGANIZATIONS_TYPES_API = environment.API_HOST+ '/org-types';

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

  loadTypes(){
    return this.http.get<OrganizationType[]>(this.ORGANIZATIONS_TYPES_API);
  }

  createType(type: OrganizationType){

    return this.http.post<OrganizationType>(this.ORGANIZATIONS_TYPES_API, type);
  }
  
  updateType(type: OrganizationType){
    return this.http.put<OrganizationType>(this.ORGANIZATIONS_TYPES_API, type);
  }

  deleteType(type: OrganizationType){
    return this.http.delete(this.ORGANIZATIONS_TYPES_API+'/'+ type.id);
  }

  public uploadImage(image: File): Observable<Object> {
    const formData = new FormData();

    formData.append('image', image);

    return this.http.post('/api/v1/image-upload', formData);
  }
}
