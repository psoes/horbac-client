import { OrgUnit } from "./OrgUnit";

export class OrgTree {	
	data?: OrgUnit;
	parent?: OrgTree;
    children?: OrgTree[];
    
    constructor(data?: OrgUnit, parent?: OrgTree, children?: OrgTree[]){
        data = data;
        parent = parent;
        children = children;
    }
 }
 export class OrgFlatNode {
    data?: OrgUnit;
    level?: number;
    expandable?: boolean;
  }
  