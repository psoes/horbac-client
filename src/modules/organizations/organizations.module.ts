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
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { CreateOrgComponent } from './components/create-org/create-org.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({  
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    AppCommonModule,
    NavigationModule,
    MatStepperModule,
    ChartsModule,
    TablesModule,
    AuthModule,
    HttpClientModule,
    DashboardModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatButtonModule,
    ReactiveFormsModule,
    NgpImagePickerModule,
    NgJsonEditorModule,
    MatSlideToggleModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    CKEditorModule
  ],
  declarations: [OrganizationComponent, CreateOrgComponent],
  exports: [OrganizationComponent],
})
export class OrganizationsModule { }
