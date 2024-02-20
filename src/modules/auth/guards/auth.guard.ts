import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { UserService } from '../services';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private userService: UserService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
            
        if (this.userService.isUserLoggedIn()) {
            return true;
        }
        this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}
