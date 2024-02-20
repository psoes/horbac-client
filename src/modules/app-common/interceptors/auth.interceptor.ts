import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from "@modules/auth/services";
import { environment } from "environments/environment";
import { Router } from "@angular/router";
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable()

export class AuthInterceptor implements HttpInterceptor {
    constructor(private userService: UserService, private router: Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const user = JSON.parse(localStorage.getItem('user') || '{}');
        const isLoggedIn = this.userService.isUserLoggedIn()
        const basic = localStorage.getItem('basic');

        // Check if request URL matches API or approval URLs
        const isApiUrl = request.url.startsWith(environment.API_HOST);
        const isApprovalUrl = request.url.startsWith(environment.APPROVAL_API);

        // Add appropriate authorization header based on authentication type and JWT expiration
        let modifiedRequest = request;
        if (isLoggedIn && isApiUrl) {
            if (this.isJwtExpired(user.jwttoken)) {
                this.logoutUser(); // Execute user logout logic
                return throwError('Unauthorized'); // Signal unauthorized access and potentially trigger redirect
            } else {
                modifiedRequest = request.clone({
                    setHeaders: {
                        Authorization: `Bearer ${user.jwttoken}`
                    }
                });
            }
        } else if (isApprovalUrl || request.headers.get("skip")) {
            modifiedRequest = request.clone({
                setHeaders: {
                    Authorization: 'Basic ' + basic
                }
            });
        }

        return next.handle(modifiedRequest).pipe(
            catchError(error => {
                if (error.status === 401) { // Handle 401 (Unauthorized) errors specifically
                    this.logoutUser(); // Logout if unauthorized
                    return throwError(error); // Re-throw the error to potentially trigger navigation
                } else {
                    return throwError(error); // Re-throw other errors for handling elsewhere
                }
            })
        );
    }

    logoutUser(): void{
        localStorage.removeItem('user');
        this.router.navigate(['/auth/login']);
    }

    private isJwtExpired(jwtToken: string | undefined): boolean {              
        const expiry = (JSON.parse(atob(jwtToken!.split('.')[1]))).exp;
        return (Math.floor((new Date).getTime() / 1000)) >= expiry;
    
    }

}