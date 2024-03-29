import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { JWTStatus } from '@modules/auth/models/JWTStatus';
import { UserService } from '@modules/auth/services';

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
  returnUrl!: string;
  constructor(private userService: UserService, private router: Router,  private activatedRoute: ActivatedRoute) {
   }

  ngOnInit(): void {
    this.activatedRoute.queryParams
      .subscribe(params => {
        if(params.registered !== undefined && params.registered === 'true') {
            this.infoMessage = 'Registration Successful! Please Login!';
        }
      });
      // reset login status
      this.userService.logout();
      this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/organizations';

  }

  handleBasicAuthLogin() {
    this.userService.login(this.username, this.password)
      .subscribe(
        data => {
          if(data.jwtStatus === JWTStatus.AUTHENTICATED){       
            
            this.invalidLogin = false;
            this.infoMessage ='Login successfull!';
            this.router.navigate(['/organizations']);
          }
          else {
            this.invalidLogin = true;
            this.infoMessage = data.jwtStatus.toString();
          }
        },
        error => {
          console.log(error);
          this.invalidLogin = true;
          this.infoMessage = error;
        }
      );
  }

}
