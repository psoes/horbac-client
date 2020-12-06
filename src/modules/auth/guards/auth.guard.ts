import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';
import { Observable, of } from 'rxjs';

@Injectable()
export class AuthGuard extends KeycloakAuthGuard {
    constructor(protected router: Router, protected keycloakService: KeycloakService){
        super(router, keycloakService);
    }
    isAccessAllowed(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Promise<boolean | UrlTree>{
        return new Promise( async (resolve, reject) => {
            if(!this.authenticated){
                this.keycloakService.login();
                resolve(false);
                return
            }
            const requiredRoles = route.data.roles;
            let granted: boolean = false;

            if(!requiredRoles || requiredRoles.length === 0){
                granted = true;
            } else {
                for( const requiredRole of requiredRoles){
                    if(this.roles.indexOf(requiredRole) > -1){
                        granted = true;
                        break;
                    }
                }
            }

            if(granted === false){
                resolve(granted);
            }
            resolve(granted);
        });
    }
}
