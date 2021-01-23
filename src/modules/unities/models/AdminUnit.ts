import { Adress } from "@modules/employees/models/Employee";
import { OrgUnit, HOLocation } from "./OrgUnit";
export class AdminUnit extends OrgUnit {
    children?: OrgUnit[] = []
    constructor(id?: number, name?: string, description?: string, url?: string, location?: HOLocation, logo?: string, address?: Adress){
        super(id, name, description, url, location, logo, address);
    }
}
