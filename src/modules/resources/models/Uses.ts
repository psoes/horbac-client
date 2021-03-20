import { Organization } from "@modules/organizations/models/organization";
import { Resource } from "./Resource";
import { Vue } from "./Vue";

export class Uses {
    id?: number;
    vue?: Vue;
    resource?: Resource;
    organization?: Organization;
}
