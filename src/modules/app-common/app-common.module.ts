/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/* Third Party */
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IconsModule } from '@modules/icons/icons.module';
import {MatSnackBarModule} from '@angular/material/snack-bar';

const thirdParty = [IconsModule, NgbModule, MatSnackBarModule];

/* Containers */
import * as appCommonContainers from './containers';

/* Components */
import * as appCommonComponents from './components';

/* Guards */
import * as appCommonGuards from './guards';

/* Services */
import * as appCommonServices from './services';
import * as authServices from '@modules/auth/services';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from './interceptors/http-error.interceptor';
import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
    imports: [CommonModule, RouterModule, ...thirdParty],
    providers: [...appCommonServices.services, 
        ...authServices.services, 
        ...appCommonGuards.guards,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpErrorInterceptor,
            multi: true,
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
        },
      /*  {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorInterceptor,
            multi: true,
        } */
    ],
    declarations: [...appCommonContainers.containers, ...appCommonComponents.components],
    exports: [...appCommonContainers.containers, ...appCommonComponents.components, ...thirdParty],
})
export class AppCommonModule {}
