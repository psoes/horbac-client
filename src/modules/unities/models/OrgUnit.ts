
export class OrgUnit {
    id? : number;
    name? : string;
	location?: HOLocation;
    url? : string;
    description?: string;
    logo?: Blob;

    constructor(id?: number, name?: string, description?: string, url?: string, location?: HOLocation, logo?: Blob){
        this.id = id;
        this.name = name;
        this.description = description;
        this.location = location;
        this.url = url;
        this.logo = logo;
    }
}
export class HOLocation {
    id? : number;
    name? : string;
    longitude? : number;
    latitude?: number;
}
