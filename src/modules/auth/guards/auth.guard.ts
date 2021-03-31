import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';
import { Observable, of } from 'rxjs';
import { UserService } from '../services';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private userService: UserService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const user = this.userService.userValue.user;
        if (user) {
            // authorised so return true
            //this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url }});
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}
