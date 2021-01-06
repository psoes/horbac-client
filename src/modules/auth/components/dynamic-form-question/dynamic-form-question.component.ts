import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit} from '@angular/core';
import { FormGroup }        from '@angular/forms';
import { QuestionBase } from '../QuestionBase';
 
@Component({
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html',
  changeDetection: ChangeDetectionStrategy.Default 
})
export class DynamicFormQuestionComponent implements OnInit, OnChanges  {
  @Input() question!: QuestionBase<any>;
  @Input() form!: FormGroup;
  ngOnInit():void {}
  get isValid() { return this.form.controls[this.question.key].valid || false; }
  ngOnChanges() {
    /**********THIS FUNCTION WILL TRIGGER WHEN PARENT COMPONENT UPDATES 'someInput'**************/
    //Write your code here
  }   
}