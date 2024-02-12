import { Activity } from "@modules/activities/models/Activity";
import { Context } from "@modules/contexts/models/Contexts";
import { Organization } from "@modules/organizations/models/organization";
import { Vue } from "@modules/resources/models/Vue";
import { OperationalUnit } from "@modules/unities/models/OperationalUnit";
import { TreatmentMode } from "./TreatmentMode";
import { OrgUnit } from "@modules/unities/models/OrgUnit";

export class OperationalPermission {
    id?: number;
    name?: string;       
    activity?: Activity = {};	
    vue?: Vue = {};
	context?: Context = {};	
    unit?: OrgUnit = {};	
    organization?: Organization ;	
	mode?: TreatmentMode = TreatmentMode.REALTIME ;
    requiredApproval?: boolean = false;
    approvalLevel?: number = 0;
    priority?: number = 3;
    timeout?: number;
    decision?: string;
    duration?: number;
    approvalType?: TypeOfApproval = TypeOfApproval.SEQUENTIAL

}

export enum TypeOfApproval {
    PARALLEL = "PARALLEL", 
    SEQUENTIAL = "SEQUENTIAL"
}