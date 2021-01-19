import { Organization } from "@modules/organizations/models/organization";
import { AdminUnit } from "./AdminUnit";

export class Subordinate {
    id?: number;
    organization!: Organization;
    superior!: AdminUnit;
    subordinate!: AdminUnit;

    constructor(org: Organization, sup: AdminUnit, inf: AdminUnit, id?: number){
        this.organization = org;
        this.superior = sup;
        this.subordinate = inf;
        this.id = id;
    }

}