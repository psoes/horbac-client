import { OrgUnit, HOLocation } from "./OrgUnit";
export class AdminUnit extends OrgUnit {
    children?: OrgUnit[] = []
    constructor(id?: number, name?: string, description?: string, url?: string, location?: HOLocation){
        super(id, name, description, url, location);
    }
}
