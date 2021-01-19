import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeeComponent } from './components/employee/employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { NavigationModule } from '@modules/navigation/navigation.module';
import { AppCommonModule } from '@common/app-common.module';
import { NgJsonEditorModule } from 'ang-jsoneditor';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgpImagePickerModule } from 'ngp-image-picker';
import { DashboardModule } from '@modules/dashboard/dashboard.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from '@modules/auth/auth.module';
import { TablesModule } from '@modules/tables/tables.module';
import { ChartsModule } from '@modules/charts/charts.module';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    CommonModule,
    RouterModule,
    FormsModule,
    AppCommonModule,
    NavigationModule,
    ChartsModule,
    TablesModule,
    AuthModule,
    HttpClientModule,
    DashboardModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    NgpImagePickerModule,
    CKEditorModule,
    NgJsonEditorModule,
    AppCommonModule,
    NavigationModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  declarations: [EmployeeComponent],
  exports: [EmployeeComponent],
})
export class EmployeesModule { }
