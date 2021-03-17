import { Action } from "@modules/actions/models/Action";
import { EmployeeCrud } from "@modules/employees/models/Employee";
import { Organization } from "@modules/organizations/models/organization";
import { Resource } from "@modules/resources/models/Resource";

export class HOLocation {
    id? : number;
    name? : string;
    longitude? : number;
    latitude?: number;
    constructor(id?: number, name?: string, longi?: number, lat?: number){
        this.id = id;
        this.name = name;
        this.longitude = longi;
        this.latitude = lat;
    }    
}
export enum DeviceType {
	DESKTOP, MOBILE, TABLET, BOT, OTHER
}


export class AcceptedDevice {
    id?: number;
	
    type?: DeviceType;
    
    browser_name?: string;
    
    browser_version?: string;
    
    platform_name?: string;
    
    platform_version?: string;    
}

export class HOPeriod {
    id?: number;	
    name?: string;
    dateFrom?: Date;    
    dateTo?: Date;
}

export class Context {
    id?: number;	
	name?: string;
	periods?: HOPeriod[] = [];
	locations?: HOLocation [] = []; 
	devices?: AcceptedDevice [] = []; 
}

export class Define {
    id?: number;	
    employee?: EmployeeCrud;
    context?: Context;	
    action?: Action;    
	resource?: Resource;	
	organization?: Organization;

    constructor(id?: number, employee?: EmployeeCrud, context?: Context, action?: Action, resource?: Resource, org?: Organization){
        this.id = id;
        this.employee = employee;
        this.context = context;	
        this.action = action;    
	    this.resource = resource;	
	    this.organization = org;
    }
}







