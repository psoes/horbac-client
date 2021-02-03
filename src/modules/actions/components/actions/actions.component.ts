import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Actions} from '@modules/actions/models/actions';
import { ActionsService } from '@modules/actions/services/actions.service';

@Component({
  selector: 'sb-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {

  isUpdate: boolean = false;
  editAct = false;
  actions: Actions[] = [];
  action: Actions = {};

  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)])
  });

  constructor( private actService: ActionsService) { 
  }

  ngOnInit(): void {
    this.actService.loadActions().subscribe( (results : Actions[]) =>{
      this.actions = results;
    })
  }

  createAct(){
    this.actService.createActions(this.action).subscribe( (result: Actions) => {
      this.editAct = false;
      this.actions.push(result);
    })
  }

  updateAct(){
    this.actService.updateActions(this.action).subscribe((result: Actions) => {
      let index = this.actions.findIndex(item => item.id === this.action.id);
      this.editAct = false;
      this.actions[index] = result;
    });
    this.isUpdate = false;
    this.action = {}
  }
  deleteAct(act: Actions){
    this.actService.deleteActions(act).subscribe( result => {
      this.actions = this.actions.filter( item => {return item.id !== act.id});
    })
  }
}
