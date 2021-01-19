import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { EmployeeCrud } from '../models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  EMPLOYEES_API = environment.API_HOST+ '/employees';

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
}
