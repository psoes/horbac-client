import { Injectable }       from '@angular/core';
import { authForms } from 'assets/authdata';
import { DropdownQuestion } from './DropdownQuestion';
import { QuestionBase } from './QuestionBase';
import { TextboxQuestion } from './TextboxQuestion';
 
@Injectable()
export class QuestionService {
  questions: QuestionBase<any>[] = [];
  // TODO: get from a remote source of question metadata
  // TODO: make asynchronous
  getQuestions() {
    
    authForms.forEach((item:any) => {
      if(item.options)
        this.questions.push(
          new DropdownQuestion({
            key: item.key,
            label: item.label,
            options: item.options,
            order: item.order
          }),
        );
        else 
          this.questions.push(new TextboxQuestion({
          key: item.key,
          label: item.label,
          value: item.value,
          required: item.required,
          order: item.order
        }))
    });
     
    return this.questions.sort((a, b) => a.order - b.order);
  }

  getRandomQuestions(){
    this.questions = [];
    authForms.forEach((item:any) => {
      if(item.options)
        this.questions.push(
          new DropdownQuestion({
            key: item.key,
            label: item.label,
            options: item.options,
            order: item.order
          }),
        );
      if(!item.options)
          this.questions.push(new TextboxQuestion({
          key: item.key,
          label: item.label,
          value: item.value,
          required: item.required,
          order: item.order
        }))
    });
    return this.questions.sort((a, b) => a.order - b.order);
    //let quest1 = this.questions[Math.floor(Math.random() * this.questions.length)];
    
  }
}
