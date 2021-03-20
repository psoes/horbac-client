import { Organization } from "@modules/organizations/models/organization";
import { Vue } from "./Vue";

export class Uses {
    id?: number;
    vue?: Vue;
    organization?: Organization;
}
