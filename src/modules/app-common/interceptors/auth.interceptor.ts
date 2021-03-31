import { ErrorHandler, Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from "@modules/auth/services";
import { environment } from "environments/environment";
import { Router, RouterStateSnapshot } from "@angular/router";


@Injectable()

export class AuthInterceptor implements HttpInterceptor {
    constructor(private userService: UserService, private router: Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add auth header with jwt if user is logged in and request is to the api url
        const user = this.userService.userValue;
        const isLoggedIn = user && user.jwttoken;
        /*let exp = this.userService.userValue?.expirationTime;
        let no = new Date();
        let bol = exp && +exp <= +no;
        */
        const isApiUrl = request.url.startsWith(environment.API_HOST);
        if (isLoggedIn && isApiUrl) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${user.jwttoken}`
                }
            });
            
        }
        return next.handle(request);
    }

}