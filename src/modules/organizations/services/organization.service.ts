import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable, of } from 'rxjs';
import { Organization, SocialReason } from '../models/organization';
import { OrganizationType } from '../models/organization-type';
import { map, catchError, tap } from 'rxjs/operators';
import { AdminUnit } from '@modules/unities/models/AdminUnit';
import { EmployeeCrud } from '@modules/employees/models/Employee';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  ORGANIZATIONS_API = environment.API_HOST+ '/organizations';
  ORGANIZATIONS_TYPES_API = environment.API_HOST+ '/org-types';
  SOCIALREASONS_API = environment.API_HOST+ '/social-reasons';

  constructor(private http: HttpClient) { }

  loadOrganizations(id?: any){

    return this.http.get<Organization[]>(this.ORGANIZATIONS_API).pipe(
      tap(res => console.log(`fetched orgs id=${res}`)),
    catchError(err => {console.log(`ERROR: ${err}`); return of([])})
    );
  }

  createOrganization(org: Organization){
    return this.http.post<Organization>(this.ORGANIZATIONS_API, org);
  }
  
  createOrganizationWithApproval(payload: {organization: Organization, root: AdminUnit, owner: EmployeeCrud}) {
    return this.http.post<Organization>(this.ORGANIZATIONS_API+'/new', payload);
  }
  updateOrganization(org: Organization){
    return this.http.put<Organization>(this.ORGANIZATIONS_API, org);
  }

  deleteOrganization(org: Organization){
    return this.http.delete(this.ORGANIZATIONS_API+'/'+ org.id);
  }

  loadTypes(){
    return this.http.get<OrganizationTypesWrapper>(this.ORGANIZATIONS_TYPES_API).pipe(
      map(w => w._embedded.organizationTypes)
    );
  }

  createType(type: OrganizationType){
    return this.http.post<OrganizationType>(this.ORGANIZATIONS_TYPES_API, type);
  }
  
  updateType(type: OrganizationType){
    return this.http.put<OrganizationType>(this.ORGANIZATIONS_TYPES_API+'/'+ type.id, type);
  }

  deleteType(type: OrganizationType){
    return this.http.delete(this.ORGANIZATIONS_TYPES_API+'/'+ type.id);
  }

  loadSocialReasons(){
    return this.http.get<SocialReasonsWrapper>(this.SOCIALREASONS_API).pipe(
      map(w => w._embedded.socialReasons)
    )
  }

  createSocialReason(sr: SocialReason){
    return this.http.post<SocialReason>(this.SOCIALREASONS_API, sr);
  }
  
  updateSocialReason(sr: SocialReason){
    return this.http.put<SocialReason>(this.SOCIALREASONS_API+'/'+ sr.id, sr);
  }

  deleteSocialReason(sr: SocialReason){
    return this.http.delete(this.SOCIALREASONS_API+'/'+ sr.id);
  }

  public uploadImage(id: number, image: File): Observable<Object> {
    const formData = new FormData();
    formData.append('file', image, image.name);
    return this.http.post(environment.API_HOST+'/organizations/'+id+'/upload', formData, {  
      responseType: 'blob'  
  });
  }

  public downloadImage(image: string): Observable < Blob > {  
    return this.http.get(environment.API_HOST + '/files/' + image, {  
        responseType: 'blob'  
    });  
}  
}

export class SocialReasonsWrapper{
  _embedded!: { socialReasons: SocialReason[]};
}

export class OrganizationTypesWrapper{
  _embedded!: { organizationTypes: OrganizationType[]};
}
