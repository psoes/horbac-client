import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService, UserService } from '@modules/auth/services';

@Component({
  selector: 'sb-simple-login',
  templateUrl: './simple-login.component.html',
  styleUrls: ['./simple-login.component.scss']
})
export class SimpleLoginComponent implements OnInit {
  username = '';
  password = '';
  infoMessage = '';
  invalidLogin = false;
  constructor(private userService: UserService, private router: Router,  private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams
      .subscribe(params => {
        if(params.registered !== undefined && params.registered === 'true') {
            this.infoMessage = 'Registration Successful! Please Login!';
        }
      });
  }

  handleBasicAuthLogin() {
    this.userService.login(this.username, this.password)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['organizations', this.username]);
          this.invalidLogin = false;
        },
        error => {
          console.log(error);
          this.invalidLogin = true;
        }
      );
  }

}
