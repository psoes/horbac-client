import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Action} from '@modules/actions/models/Action';
import { ActionsService } from '@modules/actions/services/actions.service';

@Component({
  selector: 'sb-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {

  isUpdate: boolean = false;
  editAct = false;
  actions: Action[] = [];
  action: Action = {};
  title='';

  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('')
  });

  constructor( private actService: ActionsService) { 
  }

  ngOnInit(): void {
    this.actService.loadActions().subscribe( (results : Action[]) =>{
      this.actions = results;
    })
  }

  createAct(){
    this.actService.createActions(this.action).subscribe( (result: Action) => {
      this.editAct = false;
      this.actions.push(result);
    })
  }

  updateAct(){
    this.actService.updateActions(this.action).subscribe((result: Action) => {
      let index = this.actions.findIndex(item => item.id === this.action.id);
      this.editAct = false;
      this.actions[index] = result;
    });
    this.isUpdate = false;
    this.action = {}
  }
  deleteAct(act: Action){
    this.actService.deleteActions(act).subscribe( result => {
      this.actions = this.actions.filter( item => {return item.id !== act.id});
    })
  }
}
