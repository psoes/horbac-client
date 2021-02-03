import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Activities} from '@modules/activities/models/activities';
import { ActivitiesService } from '@modules/activities/services/activities.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'sb-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {

  public Editor = ClassicEditor;
  isUpdate: boolean = false;
  editAct = false;
  activities: Activities[] = [];
  activity: Activities = {};

  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)])
  });

  constructor( private actService: ActivitiesService) { 
  }

  ngOnInit(): void {
    this.actService.loadActivities().subscribe( (results : Activities[]) =>{
      this.activities = results;
    })
  }

  createAct(){
    this.actService.createActivities(this.activity).subscribe( (result: Activities) => {
      this.editAct = false;
      this.activities.push(result);
    })
  }

  updateAct(){
    this.actService.updateActivities(this.activity).subscribe((result: Activities) => {
      let index = this.activities.findIndex(item => item.id === this.activity.id);
      this.editAct = false;
      this.activities[index] = result;
    });
    this.isUpdate = false;
    this.activity = {}
  }
  deleteAct(act: Activities){
    this.actService.deleteActivities(act).subscribe( result => {
      this.activities = this.activities.filter( item => {return item.id !== act.id});
    })
  }

  
 
}
