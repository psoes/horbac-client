import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '@modules/auth/services';
import { User } from '@modules/auth/models';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
    selector: 'sb-register',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './register.component.html',
    styleUrls: ['register.component.scss'],
})
export class RegisterComponent implements OnInit {
    user: User = {username:'', employee: {}};
    invalidRegister = false;
    errorMessage = '';
    firstName = '';
    lastName = '';
    userName: string = '';
    emailAddress: string = '';
    @ViewChild('f') signupForm?: NgForm;

    constructor(public userService: UserService, private router: Router) {
        this.user = {username: '', employee: {}};
    }
    ngOnInit() {
        this.userService.loadUsers().subscribe( users => {
            console.log('USERS ', users);
        })
    }

    onSignup() {
        if (this.signupForm?.valid === false) {
          this.invalidRegister = true;
          this.errorMessage = 'You must fill in all the fields!';
        } 
        else {
          
          console.log(this.user);
          this.user.employee.firstName = this.firstName;
          this.user.employee.lastName = this.lastName;

          this.userService.createUser(this.user).subscribe(
            data => {
              console.log(data);
            }, 
            error => {
              if (error) {
                this.invalidRegister = true;
                this.errorMessage = 'The email address you have used is already registered!';
              } 
            },
            () => {
              this.invalidRegister = false;
              this.router.navigate(['/auth/login'], {queryParams: { registered: 'true' } });
            })
        }
      }
}
