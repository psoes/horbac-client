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
import { NgJsonEditorModule } from 'ang-jsoneditor';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgpImagePickerModule } from 'ngp-image-picker';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from '@modules/auth/auth.module';
import { TablesModule } from '@modules/tables/tables.module';
import { ChartsModule } from '@modules/charts/charts.module';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatTreeModule} from '@angular/material/tree';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

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
    MatProgressSpinnerModule,
    NavigationModule,
    DashboardModule,
    MatTabsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatDialogModule,
    DragDropModule,
    MatTreeModule,
    MatCheckboxModule,
    MatChipsModule
  ],
  declarations: [UnitComponent],
  exports: [UnitComponent]
})
export class UnitiesModule { }
