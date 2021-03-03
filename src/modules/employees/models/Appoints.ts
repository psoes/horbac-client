import { Organization } from "@modules/organizations/models/organization";
import { AdminUnit } from "@modules/unities/models/AdminUnit";
import { EmployeeCrud } from "./Employee";

export class Appoints {
    id?: number;
	employee?: EmployeeCrud;
	adminUnit?: AdminUnit;
	organization?: Organization;

    constructor(id?: number, employee?: EmployeeCrud, adminUnit?: AdminUnit, organization?: Organization){
        this.id = id;
        this.employee = employee;
        this.adminUnit = adminUnit;
        this.organization = organization;
    }
}