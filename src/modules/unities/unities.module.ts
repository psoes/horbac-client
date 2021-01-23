import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnitiesRoutingModule } from './unities-routing.module';
import { UnitComponent } from './components/unit/unit.component';
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { DashboardModule } from '@modules/dashboard/dashboard.module';
import { OrganizationsModule } from '@modules/organizations/organizations.module';
import { NgJsonEditorModule } from 'ang-jsoneditor';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgpImagePickerModule } from 'ngp-image-picker';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from '@modules/auth/auth.module';
import { TablesModule } from '@modules/tables/tables.module';
import { ChartsModule } from '@modules/charts/charts.module';
import { RouterModule } from '@angular/router';


@NgModule({  
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    AppCommonModule,
    NavigationModule,
    ChartsModule,
    TablesModule,
    AuthModule,
    HttpClientModule,
    MatInputModule,
    MatSelectModule,
    NgpImagePickerModule,
    CKEditorModule,
    NgJsonEditorModule,
    NavigationModule,
    DashboardModule,
    MatTabsModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  declarations: [UnitComponent],
  exports: [UnitComponent]
})
export class UnitiesModule { }
