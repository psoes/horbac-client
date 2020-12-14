import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizationsRoutingModule } from './organizations-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OrganizationComponent } from './components/organization';
import { DashboardModule } from '@modules/dashboard/dashboard.module';
import { AuthModule } from '@modules/auth/auth.module';
import { TablesModule } from '@modules/tables/tables.module';
import { ChartsModule } from '@modules/charts/charts.module';
import { NavigationModule } from '@modules/navigation/navigation.module';
import { AppCommonModule } from '@common/app-common.module';
import { RouterModule } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  
  imports: [
    CommonModule,
      RouterModule,
      ReactiveFormsModule,
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
    MatSelectModule
    
  ],
  declarations: [OrganizationComponent],
  exports: [OrganizationComponent],
})
export class OrganizationsModule { }
