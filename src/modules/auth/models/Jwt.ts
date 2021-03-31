import { User } from "@modules/auth/models";
import { CanSuggest } from "@modules/permissions/models/CanSuggest";
import { JWTStatus } from "./JWTStatus";


export class Jwt{
    id?: string;
    jwtStatus!: JWTStatus;
	ip?: string;
	agent?: string;
	jwttoken?: string;
	expirationTime?: Date;
	issueTime?: Date;
	user?: User;
	privileges?: CanSuggest [];

}
