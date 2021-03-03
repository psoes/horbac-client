import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Consider } from '@modules/considers/models/Consider';
import { Activity } from '@modules/activities/models/Activity';
import { Action } from '@modules/actions/models/Action';
import { Organization } from '@modules/organizations/models/organization';
import { ConsiderService } from '@modules/considers/services/consider.service';
import { ActivitiesService } from '@modules/activities/services/activities.service';
import { ActionsService } from '@modules/actions/services/actions.service';
import { OrganizationService } from '@modules/organizations/services/organization.service';

@Component({
  selector: 'sb-consider',
  templateUrl: './consider.component.html',
  styleUrls: ['./consider.component.scss']
})
export class ConsiderComponent implements OnInit {

  isUpdate: boolean = false;
  editCons = false;
  considers: Consider[] = [];
  consider: Consider = {};
  activities: Activity[] = [];
  actions: Action[] = [];
  organizations: Organization[] = [];
  title='';

  myForm = new FormGroup({
    activity: new FormControl('', [Validators.required, Validators.minLength(3)]),
    action: new FormControl('', Validators.required),
    organization: new FormControl('', Validators.required)
  });

  constructor( private consService: ConsiderService, private activityService: ActivitiesService, private actionService: ActionsService, private orgService: OrganizationService) { 
  }

  ngOnInit(): void {
    this.consService.loadConsiders().subscribe((results : Consider[]) =>{
      this.considers = results;
    })
    this.activityService.loadActivities().subscribe((results : Activity[]) =>{
      this.activities = results;
    })
    this.actionService.loadActions().subscribe((results : Action[]) =>{
      this.actions = results;
    })
    this.orgService.loadOrganizations().subscribe((results : Organization[]) =>{
      this.organizations = results;
    })
  }

  createCons(){
    console.log(this.consider);
    
    this.consService.createConsider(this.consider).subscribe((result: Consider) => {
      this.editCons = false;
      this.considers.push(result);
    })
  }

  updateCons(){
    this.consService.updateConsider(this.consider).subscribe((result: Consider) => {
      let index = this.considers.findIndex(item => item.id === this.consider.id);
      this.editCons = false;
      this.considers[index] = result;
    });
    this.isUpdate = false;
    this.consider = {}
  }
  deleteCons(cons: Consider){
    this.consService.deleteConsider(cons).subscribe( result => {
      this.considers = this.considers.filter( item => {return item.id !== cons.id});
    })
  }

  
}
