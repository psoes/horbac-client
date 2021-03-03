import { Action } from '../../actions/models/Action';
import { Activity } from '../../activities/models/Activity';
import { Organization} from '../../organizations/models/organization';

export class Consider {
    id?: number;
    activity?: Activity;
    action?: Action;
    organization?: Organization;

    constructor(id?: number, action?: Action, activity?: Activity,  organization?: Organization) {
        this.id = id;
        this.activity = activity;
        this.action = action;
        this.organization = organization;
    }
}