import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';
import { ActivitiesComponent } from './components/activities/activities.component';
import { ActivitiesModule } from './activities.module';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'HOrBAC - IdP',
      breadcrumbs: [
          {
              text: 'Activities',
              link: '/activities',
          },
          {
              text: 'Register',
              active: true,
          },
      ],
  } as SBRouteData,
    component: ActivitiesComponent,
},
];


@NgModule({
  imports: [ActivitiesModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivitiesRoutingModule { }
