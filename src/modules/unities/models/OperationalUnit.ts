import { Adress } from "@modules/employees/models/Employee";
import { AdminUnit } from "./AdminUnit";
import { OrgUnit, HOLocation } from "./OrgUnit";
export class OperationalUnit extends OrgUnit {
    parent?: AdminUnit;
    constructor(id?: number, name?: string, description?: string, url?: string, location?: HOLocation, logo?: string, address?: Adress){
        super(id, name, description, url, location, logo, address);
    }
}
