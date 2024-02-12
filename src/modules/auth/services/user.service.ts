import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { error } from 'console';
import { environment } from 'environments/environment';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../models';
import { Jwt } from '../models/Jwt';
import { JwtRequest } from '../models/JwtRequest';
import { JWTStatus } from '../models/JWTStatus';

const userSubject: ReplaySubject<User> = new ReplaySubject(1);

@Injectable()
export class UserService {

    USERS_API = environment.API_HOST+ '/users';
    
    private userSubject: BehaviorSubject<Jwt>;
    public user: Observable<Jwt> = new Observable<Jwt>();

    constructor(private _snackbar: MatSnackBar, private http: HttpClient, private router: Router) {
        this.userSubject = new BehaviorSubject<Jwt>(JSON.parse(localStorage.getItem('user')|| '{}'));
        this.user = this.userSubject.asObservable();
    }


    loadUsers(){
        return this.http.get<User[]>(this.USERS_API);
    }

    createUser(usr: User){
        return this.http.post<User>(this.USERS_API, usr);
    }
    
    updateUser(usr: User){
        return this.http.put<User>(this.USERS_API, usr);
    }

    public get userValue(): Jwt {
        return this.userSubject.value;
    }

    login(username: string, password: string) {
        let jwtRequest: JwtRequest = new JwtRequest(username, password);
        localStorage.setItem('basic', JSON.stringify({username: username, password: password}));
        
        return this.http.post<Jwt>(`${environment.API_HOST}/authenticate`, jwtRequest)
            .pipe(map(jwt => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                //console.log("JWT ", jwt);
                if(jwt.jwtStatus.toString() === 'AUTHENTICATED'){
                    localStorage.setItem('user', JSON.stringify(jwt));
                    this.userSubject.next(jwt);
                }                
                return jwt;
            }));
    }

    logout() {
        // remove user from local storage and set current user to null        
        localStorage.removeItem('user');
        localStorage.removeItem('basic');
        this.http.post<Jwt>(`${environment.API_HOST}/logout/${this.userValue.user?.id}`, Jwt);
        this.userSubject.next({jwtStatus: JWTStatus.LOGOUT});
        this.router.navigate(['/auth/login']);
    }


    update(id: any, params: any) {
        return this.http.put(`${environment.API_HOST}/users/${id}`, params)
            .pipe(map(x => {
                // update stored user if the logged in user updated their own record
                if (id == this.userValue.id) {
                    // update local storage
                    const user = { ...this.userValue, ...params };
                    localStorage.setItem('user', JSON.stringify(user));

                    // publish updated user to subscribers
                    this.userSubject.next(user);
                }
                return x;
            }));
    }

    delete(id: number) {
        return this.http.delete(`${environment.API_HOST}/users/${id}`)
            .pipe(map(x => {
                // auto logout if the logged in user deleted their own record
                if (id == this.userValue.user?.id) {
                    this.logout();
                }
                return x;
            }));
    }

}
