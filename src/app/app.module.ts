import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '@modules/auth/auth.module';
import { AuthService } from '@modules/auth/services';
import { initializer } from 'AppInit';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule, 
        AppRoutingModule, 
        HttpClientModule,
        KeycloakAngularModule,
        AuthModule
    ],
    providers: [
        KeycloakService,
        {
            provide: APP_INITIALIZER,
            useFactory: initializer,
            multi: true,
            deps: [KeycloakService]
        },
        AuthService
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
