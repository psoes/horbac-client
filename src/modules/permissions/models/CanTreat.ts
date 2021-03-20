import { EmployeeCrud } from "@modules/employees/models/Employee";
import { Resource } from "@modules/resources/models/Resource";
import { Action } from "@modules/actions/models/Action";

    export class CanTreat {
        action?: Action;
        approver?: Approver;
        emitter?: Emitter;
        resource?: Resource;
    }
   export class Approver extends EmployeeCrud{}
   export class Emitter extends EmployeeCrud{}