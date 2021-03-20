import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';
import { AbstractPermissionsComponent } from './components/abstract-permissions/abstract-permissions.component';
import { PermissionHelperComponent } from './components/permission-helper/permission-helper.component';
import { PermissionsModule } from './permissions.module';

const routes: Routes = [
    {
      path: '',
      redirectTo: 'permissions', // /employees
    },
    {
      path: 'permissions',
      canActivate: [],
      component: AbstractPermissionsComponent,
      data: {
          title: 'Permissions',
          breadcrumbs: [
              {
                  text: 'Units',
                  link: '/units',
              },
              {
                  text: 'Employees',
                  link: '/employees'
              },
              {
                text: 'Permissions',
                active: true,
              },
          ],
      }  as SBRouteData
    },
    {
        path: 'helpers',
        canActivate: [],
        component: PermissionHelperComponent,
        data: {
            title: 'Helpers',
            breadcrumbs: [
                {
                    text: 'Units',
                    link: '/units',
                },
                {
                    text: 'Employees',
                    link: '/employees'
                },
                {
                  text: 'Permissions Helpers',
                  active: true,
                },
            ],
      } as SBRouteData
    }
  ];

@NgModule({
  imports: [PermissionsModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PermissionsRoutingModule { }
