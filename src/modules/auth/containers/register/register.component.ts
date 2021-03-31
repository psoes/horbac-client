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
    user: User = {employee: {}};
    confirm: string = "";
    invalidRegister = false;
    errorMessage = '';
    pass1 = '';
    pass2 = '';
    userName: string = '';
    emailAddress: string = '';
    @ViewChild('f') signupForm?: NgForm;

    constructor(public userService: UserService, private router: Router) {}
    ngOnInit() {
        this.userService.loadUsers().subscribe( users => {
            console.log('USERS ', users);
        })
    }

    onSignup(form: NgForm) {
        if (this.signupForm?.valid === false) {
          this.invalidRegister = true;
          this.errorMessage = 'You must fill in all the fields!';
        } else if (this.pass1 !== this.pass2) {
          this.invalidRegister = true;
          this.errorMessage = 'The passwords do not match!';
        } else {
          
          console.log(this.user);
          //this.user.active = true;
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
