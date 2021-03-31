import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@modules/auth/guards';
import { SBRouteData } from '@modules/navigation/models';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeesModule } from './employees.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'personal', // /employees
  },
  {
    path: 'personal',
    canActivate: [AuthGuard],
    component: EmployeeComponent,
    data: {
        title: 'Employees',
        breadcrumbs: [
            {
                text: 'Units',
                link: '/units',
            },
            {
                text: 'Employee / Personal Info',
                link: '/employees',
                active: true,
            },
        ],
    } as SBRouteData,
  },];

@NgModule({
  imports: [EmployeesModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
