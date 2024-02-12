import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ExtendedTask } from '@modules/approval/models';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
interface ApproveData {
  approve: boolean;
  comment: string;
}

@Component({
  selector: 'app-approve-modal',
  templateUrl: './approve-modal.component.html',
  styleUrls: ['./approve-modal.component.scss']
})
export class ApproveModalComponent implements OnInit {

  @Input()
  selectedTask!: ExtendedTask;
  
  @Output() approveConfirmed = new EventEmitter<ApproveData>();

  isApproveChecked = false;
  comment = '';
  constructor(private activeModal: NgbActiveModal) {}

  ngOnInit() {
    console.log("IL entre quand même..........", this.selectedTask)
  }

  public IsmodelShow: boolean = false;
  close() {
    this.IsmodelShow = true;
  }

  confirmApproval() {
 
    this.activeModal.close({ approve: this.isApproveChecked, comment: this.comment });
    
    this.approveConfirmed.emit({ approve: this.isApproveChecked, comment: this.comment });
  }
}