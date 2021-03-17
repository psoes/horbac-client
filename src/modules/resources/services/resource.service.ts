import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { map } from 'rxjs/operators';
import { Resource } from '../models/Resource';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  RESOURCES_API = environment.API_HOST+ '/resources';

  constructor(private http: HttpClient) { }

  loadResources(){
    return this.http.get<ResourcesWrapper>(this.RESOURCES_API).pipe(
      map(w => w._embedded.resources)
    );
  }

  createResource(type: Resource){
    return this.http.post<Resource>(this.RESOURCES_API, type);
  }
  
  updateResource(type: Resource){
    return this.http.put<Resource>(this.RESOURCES_API+'/'+ type.id, type);
  }

  deleteResource(type: Resource){
    return this.http.delete(this.RESOURCES_API+'/'+ type.id);
  }
}

export class ResourcesWrapper{
  _embedded!: { resources: Resource[]};
}

