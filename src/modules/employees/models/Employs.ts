import { Organization } from "@modules/organizations/models/organization";
import { OperationalUnit } from "@modules/unities/models/OperationalUnit";
import { EmployeeCrud } from "./Employee";

export class Employs {
    id?: number;
	employee?: EmployeeCrud;
	operationalUnit?: OperationalUnit;
	organization?: Organization;

    constructor(id?: number, employee?: EmployeeCrud, operationalUnit?: OperationalUnit, organization?: Organization){
        this.id = id;
        this.employee = employee;
        this.operationalUnit = operationalUnit;
        this.organization = organization;
    }
}