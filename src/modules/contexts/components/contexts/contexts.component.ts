import { Component, OnInit } from '@angular/core';
import { AcceptedDevice, Context, HOPeriod } from '@modules/contexts/models/Contexts';
import { ContextService } from '@modules/contexts/services/context.service';
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

  currentdate = new Date().toLocaleString();; 

  constructor(private contextService: ContextService) { }

  ngOnInit(): void {
    this.contextService.loadLocations().subscribe( results =>{      
      this.hoLocations = results? results : [];
      console.log("LOCATIONS ... ", this.hoLocations)
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
    console.log("datatata ", this.context);
    this.contextService.createContext(this.context).subscribe( (result) => {
      this.contexts.push(<Context>result);
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

}
