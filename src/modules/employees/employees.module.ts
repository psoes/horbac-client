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
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatCardModule} from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ChartsModule,
    TablesModule,
    AuthModule,
    HttpClientModule,
    DashboardModule,
    MatSelectModule,
    NgpImagePickerModule,
    CKEditorModule,
    NgJsonEditorModule,
    AppCommonModule,
    NavigationModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatIconModule,
    DragDropModule,
    MatCardModule,
    MatTooltipModule,
    MatProgressSpinnerModule

  ],
  declarations: [EmployeeComponent],
  exports: [EmployeeComponent],
})
export class EmployeesModule { }
