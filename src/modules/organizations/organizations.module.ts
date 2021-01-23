import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { NgpImagePickerModule } from 'ngp-image-picker';
import { NgJsonEditorModule } from 'ang-jsoneditor';
import { UnitiesModule } from '@modules/unities/unities.module';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
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
    DashboardModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    NgpImagePickerModule,
    NgJsonEditorModule,
    UnitiesModule,
    MatSlideToggleModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule
  ],
  declarations: [OrganizationComponent],
  exports: [OrganizationComponent],
})
export class OrganizationsModule { }
