import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@modules/auth/guards';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/organizations',
        canActivate: [AuthGuard] 
    },
    {
        path: 'charts',
        loadChildren: () =>
            import('modules/charts/charts-routing.module').then(m => m.ChartsRoutingModule),
    },
    {
        path: 'context',
        loadChildren: () =>
            import('modules/contexts/contexts-routing.module').then(m => m.ContextsRoutingModule),
    },
    {
        path: 'activities',
        loadChildren: () =>
            import('modules/activities/activities-routing.module').then(m => m.ActivitiesRoutingModule),
    },
    {
        path: 'actions',
        loadChildren: () =>
            import('modules/actions/actions-routing.module').then(m => m.ActionsRoutingModule),
    },
    {
        path: 'considers',
        loadChildren: () =>
            import('modules/considers/considers-routing.module').then(m => m.ConsidersRoutingModule),
    },
    {
        path: 'organizations',
        loadChildren: () =>
            import('modules/organizations/organizations-routing.module').then(m => m.OrganizationsRoutingModule),
    },
    {
        path: 'units',
        loadChildren: () =>
            import('modules/unities/unities-routing.module').then(m => m.UnitiesRoutingModule),
    },
    {
        path: 'employees',
        loadChildren: () =>
            import('modules/employees/employees-routing.module').then(m => m.EmployeesRoutingModule),
    },
    {
        path: 'permissions',
        loadChildren: () =>
            import('modules/permissions/permissions-routing.module').then(m => m.PermissionsRoutingModule),
    },
    {
        path: 'resources',
        loadChildren: () =>
            import('modules/resources/resources-routing.module').then(m => m.ResourcesRoutingModule),
    },
    {
        path: 'dashboard',
        loadChildren: () =>
            import('modules/dashboard/dashboard-routing.module').then(
                m => m.DashboardRoutingModule
            ),
    },
    {
        path: 'auth',
        loadChildren: () =>
            import('modules/auth/auth-routing.module').then(m => m.AuthRoutingModule),
    },
    {
        path: 'error',
        loadChildren: () =>
            import('modules/error/error-routing.module').then(m => m.ErrorRoutingModule),
    },
    {
        path: 'tables',
        loadChildren: () =>
            import('modules/tables/tables-routing.module').then(m => m.TablesRoutingModule),
    },
    {
        path: 'approval',
        loadChildren: () =>
            import('modules/approval/approval-routing.module').then(m => m.ApprovalRoutingModule),
    },
    {
        path: 'version',
        loadChildren: () =>
            import('modules/utility/utility-routing.module').then(m => m.UtilityRoutingModule),
    },
    {
        path: '**',
        pathMatch: 'full',
        loadChildren: () =>
            import('modules/error/error-routing.module').then(m => m.ErrorRoutingModule),
    },
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
