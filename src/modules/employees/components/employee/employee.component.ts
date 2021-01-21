import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Adress, Email, EmployeeCrud, PhoneNumber, SpecialIdentity, Title } from '@modules/employees/models/Employee';
import { EmployeeService } from '@modules/employees/services/employee.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'sb-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  imageSrc! : SafeResourceUrl;
  isUpdate: boolean = false;
  nbPhones: number = 0;
  nbEmails:  number = 0;
  step = 0;
  public employees!: EmployeeCrud [];
  employee: EmployeeCrud = {};
  constructor(private employeeService: EmployeeService,  private sanitization: DomSanitizer) {
    this.employee = new EmployeeCrud(new SpecialIdentity());
    this.employee.addresses = [new Adress()];
    this.employee.phones = [new PhoneNumber()];
    this.employee.emails = [new Email()];
  }
  ngOnInit(): void {
    this.employeeService.loadEmployees().subscribe( (results : EmployeeCrud[]) =>{
      this.employees = results;
    })
  }
  createEmployee(){
    console.info('DATA SUBMITTED', this.employee);
    this.employeeService.createEmployee(this.employee).subscribe( (result: EmployeeCrud) => {
      console.info('RESULT', result);
      this.employees.push(result);
    } )
  }

  updateEmployee(){
    this.employeeService.updateEmployee(this.employee).subscribe((result: EmployeeCrud) => {
      let index = this.employees.findIndex(item => item.id === this.employee.id)
      this.employees[index] = result;
    });
    this.isUpdate = false;
    this.employee = {}
  }

  deleteEmployee(emp: EmployeeCrud){
    this.employeeService.deleteEmployee(emp).subscribe( (result: any) => {
      this.employees = this.employees.filter( item => {return item.id !== emp.id});
    })
  }
  onFileChange(event: any) {
    const reader = new FileReader();
    
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);    
      reader.onload = () => {        
        this.imageSrc  = this.sanitization.bypassSecurityTrustResourceUrl(reader.result as string);
        //this.imageSrc = reader.result as SafeResourceUrl;
        console.info('File source... ', file.size)
        console.info('File source... ', file.name)
        console.info('File source... ', file.type)
      };   
    }
  }
  addPhone(){
    this.employee.phones?.push(new PhoneNumber());
  }
  removePhone(index: number){
    this.employee.phones?.splice(index, 1);
  }
  addEmail(){
    this.employee.emails?.push(new Email());
  }
  removeEmail(index: number){
    this.employee.emails?.splice(index, 1);
  }

  addAddress(){
    this.employee.addresses?.push(new Adress());
  }
  removeAddress(index: number){
    this.employee.addresses?.splice(index, 1);
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  someFn(){

  }
  drop(event: CdkDragDrop<string[]>) {
   // moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }
}
