import { EmployeeCrud, Person } from "@modules/employees/models/Employee";

export interface User {
    id?: number;
    username?: string;	
    password?: string;
    picture?: string;
	active?: boolean;
    employee?: EmployeeCrud;
	accountNonExpired?: boolean;
    accountNonLocked?: boolean;
    credentialsNonExpired?: boolean;
    enabled?: boolean;
    token?: string;
}
