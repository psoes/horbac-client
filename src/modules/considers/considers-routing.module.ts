import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';
import { ConsiderComponent } from './components/consider/consider.component';
import { ConsidersModule } from './considers.module';

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'HOrBAC - IdP',
            breadcrumbs: [
                {
                    text: 'Consider',
                    link: '/considers',
                },
                {
                    text: 'Register',
                    active: true,
                },
            ],
        } as SBRouteData,
        component: ConsiderComponent,
    },
];

@NgModule({
    imports: [ConsidersModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ConsidersRoutingModule { }
