import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';
import { ContextsComponent } from './components/contexts/contexts.component';
import { ContextsModule } from './contexts.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'context', // /employees
  },
  {
    path: 'context',
    canActivate: [],
    component: ContextsComponent,
    data: {
        title: 'Contexts',
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
              text: 'Context',
              active: true,
          },
        ],
    } as SBRouteData,
  },];

@NgModule({
  imports: [ContextsModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContextsRoutingModule { }
