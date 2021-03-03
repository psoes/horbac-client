import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';
import { ActionsComponent } from './components/actions/actions.component';
import { ActionsModule } from './actions.module';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'HOrBAC - IdP',
      breadcrumbs: [
          {
              text: 'Actions',
              link: '/actions',
          },
          {
              text: 'Register',
              active: true,
          },
      ],
  } as SBRouteData,
    component: ActionsComponent,
},
];


@NgModule({
  imports: [ActionsModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActionsRoutingModule { }
