export class JwtRequest {
    username?: string;
	password?: string;

    constructor(us: string, pwd: string){
        this.username = us;
        this.password = pwd;
    }
}