/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { ApprovalModule } from './approval.module';

/* Containers */
import * as approvalContainers from './containers';

/* Guards */
import * as approvalGuards from './guards';
import { SBRouteData } from '@modules/navigation/models';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        canActivate: [],
        component: approvalContainers.ApprovalComponent,
        data: {
            title: 'Approval',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard',
                },
                {
                    text: 'Tasks',
                    active: true,
                },
            ],
        } as SBRouteData,
    },
];

@NgModule({
    imports: [ApprovalModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class ApprovalRoutingModule {}
