import { EmployeeCrud } from "@modules/employees/models/Employee";
import { Resource } from "@modules/resources/models/Resource";
import { Action } from "@modules/actions/models/Action";
import { Emitter } from "./CanTreat";

    export class CanSuggest {
        action?: Action;
        emitter?: Emitter;
        resource?: Resource;
    }