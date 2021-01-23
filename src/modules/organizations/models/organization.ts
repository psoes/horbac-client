import { Adress } from "@modules/employees/models/Employee";
import { HOLocation } from "@modules/unities/models/OrgUnit";
import { OrganizationType } from "./organization-type";

export class SocialReason {
    id?: number;
    name?: string;    
    description?: string; 
}
export class Organization {
    id?: number;
    name?: string;    
    description?: string;    
    inceptionDate? : Date;	
	cessationDate? : Date;    
    type?: OrganizationType;
    logo?: string;
    address?: Adress;
    url?: string;
    location?: HOLocation;
    socialReason?: SocialReason;
    constructor(id?: number, name?: string, description?: string, 
        inceptionDate?: Date, cessationDate?: Date, type?: OrganizationType, 
        address?: Adress, url?: string, location?: HOLocation, socialReason?: SocialReason, logo?: string){
        this.id = id;
        this.name = name;
        this.description = description;
        this.inceptionDate = inceptionDate;
        this.cessationDate = cessationDate;
        this.type = type;
        this.address = address;
        this.location = location;
        this.logo  = logo;
        this.socialReason = socialReason;
        this.url = url;
    }
}
