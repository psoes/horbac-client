import { AdminUnit } from "./AdminUnit";
import { OrgUnit, HOLocation } from "./OrgUnit";
export class OperationalUnit extends OrgUnit {
    parent?: AdminUnit;
    constructor(id?: number, name?: string, description?: string, url?: string, location?: HOLocation){
        super(id, name, description, url, location);
    }
}
