import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@modules/auth/guards';
import { SBRouteData } from '@modules/navigation/models';
import { ResourcesComponent } from './components/resources/resources.component';
import { ResourcesModule } from './resources.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'resources', // /resources
  },
  {
    path: 'resources',
    canActivate: [AuthGuard],
    component: ResourcesComponent,
    data: {
        title: 'Resources',
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
              text: 'Resource',
              active: true,
          },
        ],
    } as SBRouteData,
  },];

@NgModule({
  imports: [ResourcesModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourcesRoutingModule { }
