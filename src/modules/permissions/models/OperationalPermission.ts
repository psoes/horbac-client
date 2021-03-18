import { Activity } from "@modules/activities/models/Activity";
import { Context } from "@modules/contexts/models/Contexts";
import { Organization } from "@modules/organizations/models/organization";
import { Vue } from "@modules/resources/models/Vue";
import { OperationalUnit } from "@modules/unities/models/OperationalUnit";
import { TreatmentMode } from "./TreatmentMode";

export class OperationalPermission {
    id?: number;
    name?: string;       
    activity?: Activity = {};	
    vue?: Vue = {};
	context?: Context = {};	
    unit?: OperationalUnit = {};	
    organization?: Organization ;	
	mode?: TreatmentMode = TreatmentMode.REALTIME ;
}