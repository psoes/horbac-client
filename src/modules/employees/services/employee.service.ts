import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Appoints } from '../models/Appoints';
import { EmployeeCrud } from '../models/Employee';
import { Employs } from '../models/Employs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  EMPLOYEES_API = environment.API_HOST+ '/employees';
  APPOINTS_API = environment.API_HOST+ '/appoints';
  EMPLOYS_API = environment.API_HOST+ '/employs';

  constructor(private http: HttpClient) { }

  loadEmployees(){
    return this.http.get<EmployeeCrud[]>(this.EMPLOYEES_API);
  }
  createEmployee(employee: EmployeeCrud){
    return this.http.post<EmployeeCrud>(this.EMPLOYEES_API, employee);
  }  
  updateEmployee(employee: EmployeeCrud){
    return this.http.put<EmployeeCrud>(this.EMPLOYEES_API, employee);
  }
  deleteEmployee(employee: EmployeeCrud){
    return this.http.delete(this.EMPLOYEES_API+'/'+ employee.id);
  }
  public uploadImage(image: File): Observable<Object> {
    const formData = new FormData();
    formData.append('image', image);
    return this.http.post('/api/v1/image-upload', formData);
  } 
  loadAppoints(){
    return this.http.get<Appoints []>(this.APPOINTS_API);
  }
  createAppoints(app: Appoints){
    return this.http.post<Appoints>(this.APPOINTS_API, app);
  }  
  updateAppoints(app: Appoints){
    return this.http.put<Appoints>(this.APPOINTS_API, app);
  }
  deleteAppoints(app: Appoints){
    return this.http.delete(this.APPOINTS_API+'/'+ app.id);
  }

  loadEmploys(){
    return this.http.get<Employs []>(this.EMPLOYS_API);
  }
  createEmploys(app: Employs){
    return this.http.post<Employs>(this.EMPLOYS_API, app);
  }  
  updateEmploys(app: Employs){
    return this.http.put<Employs>(this.EMPLOYS_API, app);
  }
  deleteEmploys(app: Employs){
    return this.http.delete(this.EMPLOYS_API+'/'+ app.id);
  }
}
