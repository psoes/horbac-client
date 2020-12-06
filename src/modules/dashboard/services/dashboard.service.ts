import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DashboardService {
    
    ORGANIZATIONS_API = 'organizations';
    

    constructor(private httpClient: HttpClient) {}

    getDashboard$(): Observable<{}> {
        return of({});
    }

    public getOrganizations(){
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json'
            })
          };
        return this.httpClient.get(environment.API_HOST+this.ORGANIZATIONS_API, httpOptions
            );
    }
}
