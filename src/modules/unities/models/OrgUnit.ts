import { Adress } from "@modules/employees/models/Employee";

export class OrgUnit {
    id? : number;
    name? : string;
	location?: HOLocation;
    url? : string;
    description?: string;
    logo?: string;
    address?: Adress;

    constructor(id?: number, name?: string, description?: string, url?: string, location?: HOLocation, logo?: string, address?: Adress){
        this.id = id;
        this.name = name;
        this.description = description;
        this.location = location;
        this.url = url;
        this.logo = logo;
        this.address = address;
    }
}
export class HOLocation {
    id? : number;
    name? : string;
    longitude? : number;
    latitude?: number;
}
