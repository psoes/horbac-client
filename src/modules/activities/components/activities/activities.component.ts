import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Activity} from '@modules/activities/models/Activity';
import { ActivitiesService } from '@modules/activities/services/activities.service';

@Component({
  selector: 'sb-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {

  isUpdate: boolean = false;
  editAct = false;
  activities: Activity[] = [];
  activity: Activity = {};
  title='';

  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('')
  });

  constructor( private actService: ActivitiesService) { 
  }

  ngOnInit(): void {
    this.actService.loadActivities().subscribe( (results : Activity[]) =>{
      this.activities = results;
    })
  }

  createAct(){
    this.actService.createActivities(this.activity).subscribe( (result: Activity) => {
      this.editAct = false;
      this.activities.push(result);
    })
  }

  updateAct(){
    this.actService.updateActivities(this.activity).subscribe((result: Activity) => {
      let index = this.activities.findIndex(item => item.id === this.activity.id);
      this.editAct = false;
      this.activities[index] = result;
    });
    this.isUpdate = false;
    this.activity = {}
  }
  deleteAct(act: Activity){
    this.actService.deleteActivities(act).subscribe( result => {
      this.activities = this.activities.filter( item => {return item.id !== act.id});
    })
  }

  
 
}
