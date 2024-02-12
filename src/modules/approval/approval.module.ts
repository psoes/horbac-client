/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/* Modules */
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';

import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { NgJsonEditorModule } from 'ang-jsoneditor';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgpImagePickerModule } from 'ngp-image-picker';
import { DashboardModule } from '@modules/dashboard/dashboard.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from '@modules/auth/auth.module';
import { ChartsModule } from '@modules/charts/charts.module';
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

/* Components */
import * as approvalComponents from './components';

/* Containers */
import * as approvalContainers from './containers';

/* Directives */
import * as approvalDirectives from './directives';

/* Guards */
import * as approvalGuards from './guards';

/* Services */
import * as approvalServices from './services';
import { TasksService } from './services/tasks.service';
import { IconsModule } from '@modules/icons/icons.module';
import { TablesModule } from '@modules/tables/tables.module';
import { ApproveModalComponent } from './components/approve-modal/approve-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
        MatProgressSpinnerModule,
        MatListModule,
        MatSnackBarModule,
        MatCheckboxModule,
        MatChipsModule,
        MatAutocompleteModule,
        NgbModule
    ],
    providers: [
        TasksService,
        ...approvalGuards.guards,
        ...approvalDirectives.directives,
    ],
    declarations: [
        ...approvalContainers.containers,
        ...approvalComponents.components,
        ...approvalDirectives.directives,
        ApproveModalComponent,
    ],
    exports: [...approvalContainers.containers, ...approvalComponents.components],
    
})
export class ApprovalModule {}
