import { QuestionBase } from "./QuestionBase";

export class DropdownQuestion extends QuestionBase<string> {
    controlType = 'dropdown';
    options: {key: string, value: string}[] = [];
  
    constructor(options: any) {
      super(options);
      this.options = options['options'] || [];
    }
  }