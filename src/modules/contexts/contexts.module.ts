import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContextsComponent } from './components/contexts/contexts.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from '@modules/charts/charts.module';
import { TablesModule } from '@modules/tables/tables.module';
import { AuthModule } from '@modules/auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { DashboardModule } from '@modules/dashboard/dashboard.module';
import { MatSelectModule } from '@angular/material/select';
import { NgpImagePickerModule } from 'ngp-image-picker';
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';


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
    MatProgressSpinnerModule,
    MatListModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatChipsModule,
    MatAutocompleteModule
  ],
  declarations: [ContextsComponent],
  exports: [ContextsComponent],
})
export class ContextsModule { }


