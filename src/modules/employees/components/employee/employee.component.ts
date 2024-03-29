import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Adress, Email, EmployeeCrud, PhoneNumber, SpecialIdentity, Title } from '@modules/employees/models/Employee';
import { EmployeeService } from '@modules/employees/services/employee.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { Observable } from 'rxjs';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import { MatTabGroup } from '@angular/material/tabs';
import { MatChipInputEvent } from '@angular/material/chips';
import { map, startWith } from 'rxjs/operators';
import { Organization } from '@modules/organizations/models/organization';
import { AdminUnit } from '@modules/unities/models/AdminUnit';
import { Appoints } from '@modules/employees/models/Appoints';
import { Employs } from '@modules/employees/models/Employs';
import { UnitService } from '@modules/unities/services/unit.service';
import { OrganizationService } from '@modules/organizations/services/organization.service';
import { OperationalUnit } from '@modules/unities/models/OperationalUnit';
import { browser } from 'protractor';

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
  cigar: boolean = false;
  food: boolean = false;
  drug: boolean = false;
  drink: boolean = false;
  fruit: boolean = false;

  organizations: Organization[] = [];
  aunits: AdminUnit[] = [];
  ounits: OperationalUnit[] = [];

  formTitle: string = 'New association';
  appoints: Appoints[] = [];
  appoint: Appoints = {};
  appointForm: boolean|null = null;
  currentAppoint: Appoints = {};
  employs: Employs[] = [];
  currentEmploys: Employs = {};
  

  mapTitle = '';
  isSubordinate = true;


  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl();
  filteredFruits!: Observable<string[]>;
  fruits: string[] = ['Lemon'];
  allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];

  @ViewChild('fruitInput') fruitInput!: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete!: MatAutocomplete;

  @ViewChild('tabGroup', { static: true }) tabGroup!: ElementRef<MatTabGroup>;
  public employees: EmployeeCrud [] = [];
  employee: EmployeeCrud = {};
  actionInProgress = false;
  message = ""
  hasError = false;
  success = false;
  pending: boolean = false;
  constructor(private unitService: UnitService, private orgService: OrganizationService, private employeeService: EmployeeService,  private sanitization: DomSanitizer) {
    this.employee = new EmployeeCrud(new SpecialIdentity());
    this.employee.addresses = [new Adress()];
    this.employee.phones = [new PhoneNumber()];
    this.employee.emails = [new Email()];
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(startWith(null),
      map((fruit: string | null) => fruit ? this._filter(fruit) : this.allFruits.slice()));
    //this.tabGroup.nativeElement!.selectedIndex = 0;
  }
  ngOnInit(): void {
    this.employeeService.loadEmployees().subscribe( (results : EmployeeCrud[]) =>{
      this.employees = results ? results : [];
    });
    this.employeeService.loadAppoints().subscribe( (results : Appoints[]) =>{
      this.appoints = results ? results : [];
    });

    this.orgService.loadOrganizations().subscribe( (results) =>{
      this.organizations = results;
    })

    this.unitService.loadAdminUnits().subscribe( (results) =>{
      this.aunits = results;
    });

    this.unitService.loadOperationalUnits().subscribe( (results) =>{
      this.ounits = results;
    });

    this.employeeService.loadEmploys().subscribe( (results) =>{
      this.employs = results;
    })
  }
  createEmployee(){
    this.actionInProgress = true;
    this.employeeService.createEmployee(this.employee).subscribe( (result: EmployeeCrud) => {
      this.employee = result;
      this.employees.push(result);
    } )
    this.actionInProgress = false;
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

  infoPanels = [
    'personal',
    'addresses',
    'contacts',
    'identifiers'
  ];
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.infoPanels, event.previousIndex, event.currentIndex);
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.fruitCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  }

  createAppoints(){
    this.actionInProgress = true;
    this.pending = true;
    this.employeeService.createAppoints(this.appoint).subscribe( (result: Appoints) => {
        this.appoints.push(result);
        this.pending = false;
        this.hasError = false;
        this.success = true;
        this.pending = false;
        this.message = "Operation approved by the hierarchy!"
      },
      (err) => {
        console.error(err)
        this.hasError = true;
        this.pending = false;
        this.message = "Operation rejected by the hierarchy!"
      }
    )
    this.actionInProgress = false;
  }
  deleteAppoints(app: Appoints){
    this.pending = true;
    this.employeeService.deleteAppoints(app).subscribe( (result: any) => {
      this.appoints = this.appoints.filter( item => {return item.id !== app.id});
        this.pending = false;
        this.hasError = false;
        this.success = true;
        this.pending = false;
        this.message = "Operation approved by the hierarchy!"
      },
      (err) => {
        console.error(err)
        this.hasError = true;
        this.pending = false;
        this.message = "Operation rejected by the hierarchy!"
      }
    )
  }

  createEmploys(){
    this.actionInProgress = true;
    this.pending = true;
    this.employeeService.createEmploys(this.currentEmploys).subscribe( (result: Employs) => {
      this.employs.push(result);
      this.pending = false;
      this.hasError = false;
      this.success = true;
      this.pending = false;
      this.message = "Operation approved by the hierarchy!"
    },
    (err) => {
      console.error(err)
      this.hasError = true;
      this.pending = false;
      this.message = "Operation rejected by the hierarchy!"
    }
    )
    this.actionInProgress = false;
  }
  deleteEmploys(app: Employs){
    this.pending = true;
    this.employeeService.deleteEmploys(app).subscribe( (result: any) => {
      this.employs = this.employs.filter( item => {return item.id !== app.id});
        this.pending = false;
        this.hasError = false;
        this.success = true;
        this.pending = false;
        this.message = "Operation approved by the hierarchy!"
      },
      (err) => {
        console.error(err)
        this.hasError = true;
        this.pending = false;
        this.message = "Operation rejected by the hierarchy!"
      }
    )
  }

}
