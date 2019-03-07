import { Component, OnInit } from '@angular/core';
import { CustomerAuthenticationService } from '../../services/customer/customer-authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authService: CustomerAuthenticationService) { }
  private user:any = {
    confirm_password: "ph6170513",
    email: "roygoraposonjr@gmail.com",
    firstname: "Roy",
    lastname: "Raposon",    ​
    password: "ph6170513",    ​
    student_id: "2017-0076"
  };
  ngOnInit() {
  }

  login() {
    this.authService.login(this.user);
  }

}
