import { Organization } from "@modules/organizations/models/organization";
import { AdminUnit } from "./AdminUnit";
import { OperationalUnit } from "./OperationalUnit";

export class PlaceUnder {
    id?: number;
    organization!: Organization;
    superior!: AdminUnit;
    subordinate!: OperationalUnit;

    constructor(org: Organization, sup: AdminUnit, inf: OperationalUnit, id?: number){
        this.organization = org;
        this.superior = sup;
        this.subordinate = inf;
        this.id = id;
    }

}