import { User } from "@modules/auth/models";
import { CanSuggest } from "@modules/permissions/models/CanSuggest";


export class Jwt{
    id?: string;
    jwtStatus?: JWTStatus;
	ip?: string;
	agent?: string;
	jwttoken?: string;
	expirationTime?: Date;
	issueTime?: Date;
	user?: User;
	privileges?: CanSuggest [];

}
enum JWTStatus {	
	USER_DISABLED, BAD_CREDENTIALS, AUTHENTICATED
}