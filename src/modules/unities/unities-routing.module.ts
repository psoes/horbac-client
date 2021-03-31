import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@modules/auth/guards';
import { SBRouteData } from '@modules/navigation/models';
import { UnitComponent } from './components/unit/unit.component';
import { UnitiesModule } from './unities.module';

const routes: Routes = [ 
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'admin-unit',
  },
  {
    path: 'admin-unit',
    canActivate: [AuthGuard],
    component: UnitComponent,
    data: {
        title: 'Units',
        breadcrumbs: [
            {
                text: 'Organizations',
                link: '/organizations',
            },
            {
                text: 'Units',
                active: true,
            },
        ],
    } as SBRouteData,
  },
];

@NgModule({
  imports: [UnitiesModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnitiesRoutingModule { }
