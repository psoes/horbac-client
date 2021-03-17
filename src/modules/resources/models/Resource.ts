export class Resource {
    id?: number;
	name?: string;
	url?: string;
	scopes?: Scope [] = []; 
} 
export class Scope {
    id?: number;
	name?: string;
    description?: string;
}
    