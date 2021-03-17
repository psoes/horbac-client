import { Component, OnInit } from '@angular/core';
import { Action } from '@modules/actions/models/Action';
import { ActionsService } from '@modules/actions/services/actions.service';
import { AcceptedDevice, Context, Define, HOPeriod } from '@modules/contexts/models/Contexts';
import { ContextService } from '@modules/contexts/services/context.service';
import { EmployeeCrud } from '@modules/employees/models/Employee';
import { EmployeeService } from '@modules/employees/services/employee.service';
import { Organization } from '@modules/organizations/models/organization';
import { OrganizationService } from '@modules/organizations/services/organization.service';
import { Resource } from '@modules/resources/models/Resource';
import { ResourceService } from '@modules/resources/services/resource.service';
import { HOLocation } from '@modules/unities/models/OrgUnit';

@Component({
  selector: 'sb-contexts',
  templateUrl: './contexts.component.html',
  styleUrls: ['./contexts.component.scss']
})
export class ContextsComponent implements OnInit {

  isUpdate: boolean = false;
  hoLocation: HOLocation = {};
  device: AcceptedDevice = {};
  hoLocations: HOLocation [] = [];
  devices: AcceptedDevice[] = [];
  periods: HOPeriod[] = [];
  period: HOPeriod = {};
  
  actionInProgress: boolean = false;

  context: Context = {};
  contexts: Context [] = [];
  title = '';

  define: Define = new Define();
  defines: Define[] = [];

  organizations: Organization[] = [];
  employees: EmployeeCrud[] = [];
  actions: Action[] = [];
  resources: Resource[] = []; 

  constructor(private resourceService: ResourceService, private actionService: ActionsService, private employeeService: EmployeeService, private contextService: ContextService, private orgService: OrganizationService) { }

  ngOnInit(): void {
    this.contextService.loadDefines().subscribe( (results : Define[]) =>{
      this.defines = results ? results : [];
    });
    this.resourceService.loadResources().subscribe( (results : Resource[]) =>{
      this.resources = results ? results : [];
    });
    this.actionService.loadActions().subscribe( (results : Action[]) =>{
      this.actions = results ? results : [];
    });
    this.employeeService.loadEmployees().subscribe( (results : EmployeeCrud[]) =>{
      this.employees = results ? results : [];
    });
    this.orgService.loadOrganizations().subscribe( (results : Organization[]) =>{
      this.organizations = results;
    })
    this.contextService.loadLocations().subscribe( results =>{      
      this.hoLocations = results? results : [];
    })

    this.contextService.loadDevices().subscribe(results =>{
      this.devices = results? results : [];
    })
    this.contextService.loadPeriods().subscribe(results =>{
      this.periods = results? results : [];
      console.log("PERIODS ... ", this.periods)
    });
    this.contextService.loadContexts().subscribe(results =>{
      this.contexts = results? results : [];
    })
  }
  createDevice(){
    this.contextService.createDevice(this.device).subscribe( (result) => {
      this.devices.push(<AcceptedDevice>result);
    })
  }

  updateDevice(){
    this.contextService.updateDevice(this.device).subscribe((result) => {
      let index = this.devices.findIndex(item => item.id === this.hoLocation.id);
      this.devices[index] = <AcceptedDevice>result;
    });
    this.isUpdate = false;
    this.device = {}
  }

  deleteDevice(type: HOLocation){
    this.contextService.deleteDevice(type).subscribe( result => {
      this.devices = this.devices.filter( item => {return item.id !== type.id});
    })
  }

  createLocation(){
    this.contextService.createLocation(this.hoLocation).subscribe( (result) => {
      this.hoLocations.push(<HOLocation>result);
      this.hoLocation = {};
    })
  }

  updateLocation(){
    this.contextService.updateLocation(this.hoLocation).subscribe((result) => {
      let index = this.hoLocations.findIndex(item => item.id === this.hoLocation.id);
      this.hoLocations[index] = <HOLocation>result;
    });
    this.isUpdate = false;
    this.hoLocation = {}
  }

  deleteLocation(type: HOLocation){
    this.contextService.deleteLocation(type).subscribe( result => {
      this.hoLocations = this.hoLocations.filter( item => {return item.id !== type.id});
    })
  }

  /////
  createPeriod(){
    this.contextService.createPeriod(this.period).subscribe( (result) => {
      this.periods.push(<HOPeriod>result);
      this.period = {};
    })
  }

  updatePeriod(){
    this.contextService.updatePeriod(this.period).subscribe((result) => {
      let index = this.periods.findIndex(item => item.id === this.period.id);
      this.periods[index] = <HOPeriod>result;
    });
    this.isUpdate = false;
    this.period = {}
  }

  deletePeriod(per: HOLocation){
    this.contextService.deletePeriod(per).subscribe( result => {
      this.periods = this.periods.filter( item => {return item.id !== per.id});
    })
  }

  ////

  createContext(){
    this.contextService.createContext(this.context).subscribe( (result) => {
      this.contexts.push(<Context>result);
      this.context = {};
    })
  }

  updateContext(){
    this.contextService.updateContext(this.context).subscribe((result) => {
      let index = this.contexts.findIndex(item => item.id === this.context.id);
      this.contexts[index] = <Context>result;
    });
    this.isUpdate = false;
    this.context = {}
  }

  deleteContext(per: Context){
    this.contextService.deleteContext(per).subscribe( result => {
      this.contexts = this.contexts.filter( item => {return item.id !== per.id});
    })
  }

  /////
  createDefine(){
    this.contextService.createDefine(this.define).subscribe( (result) => {
      this.defines.push(<Define>result);
      this.define = new Define();
    })
  }

  updateDefine(){
    this.contextService.updateDefine(this.define).subscribe((result) => {
      let index = this.defines.findIndex(item => item.id === this.define.id);
      this.defines[index] = <Define>result;
    });
    this.isUpdate = false;
    this.define = new Define();
  }

  deleteDefine(per: Define){
    this.contextService.deleteDefine(per).subscribe( result => {
      this.defines = this.defines.filter( item => {return item.id !== per.id});
    })
  }


}
