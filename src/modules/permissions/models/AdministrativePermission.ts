import { Activity } from "@modules/activities/models/Activity";
import { Context } from "@modules/contexts/models/Contexts";
import { Organization } from "@modules/organizations/models/organization";
import { Vue } from "@modules/resources/models/Vue";
import { AdminUnit } from "@modules/unities/models/AdminUnit";
import { OperationalUnit } from "@modules/unities/models/OperationalUnit";
import { AdministrativeUnitsWrapper } from "@modules/unities/services/unit.service";
import { TreatmentMode } from "./TreatmentMode";

export class AdministrativePermission {
    id?: number; 
    name?: string;   
    activity?: Activity = {};	
    vue?: Vue = {};
	context?: Context = {};	
    operationalUnit?: OperationalUnit = {};	
    administrativeUnit?: AdminUnit = {};	
    organisation?: Organization;	
	mode?: TreatmentMode = TreatmentMode.REALTIME ;
}