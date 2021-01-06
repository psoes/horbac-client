import { QuestionBase } from "./QuestionBase";

export class TextboxQuestion extends QuestionBase<string> {
    controlType = 'textbox';
    type: string;
  
    constructor(options: any) {
      super(options);
      this.type = options['type'] || '';
    }
  }