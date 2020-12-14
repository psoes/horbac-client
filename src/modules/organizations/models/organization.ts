import { OrganizationType } from "./organization-type";

export class Organization {
    id?: number;
    name?: string;
    
    description?: string;
    
    inceptionDate? : Date;
	
	cessationDate? : Date;
    
    type?: OrganizationType;

    constructor(id?: number, name?: string, description?: string, inceptionDate?: Date, cessationDate?: Date, type?: OrganizationType){
        this.id = id;
        this.name = name;
        this.description = description;
        this.inceptionDate = inceptionDate;
        this.cessationDate = cessationDate;
        this.type = type;
    }
}
