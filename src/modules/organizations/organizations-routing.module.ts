import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@modules/auth/guards';
import { SBRouteData } from '@modules/navigation/models';
import { OrganizationComponent } from './components/organization/organization.component';
import { OrganizationsModule } from './organizations.module';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'HOrBAC - IdP',
      breadcrumbs: [
          {
              text: 'Organizations',
              link: '/organizations',
          },
          {
              text: 'Units',
              link: '/units',
        },
        {
              text: 'Register',
              active: true,
        },
      ],
  } as SBRouteData,
  component: OrganizationComponent,
  canActivate: [AuthGuard],
},
];

@NgModule({
  imports: [OrganizationsModule, 
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class OrganizationsRoutingModule { }
