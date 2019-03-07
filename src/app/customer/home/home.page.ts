import { Component, OnInit } from '@angular/core';
import { CustomerAuthenticationService } from 'src/app/services/customer/customer-authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  private user: any;
  constructor(
    private auth: CustomerAuthenticationService
  ) { 

  }
  
  ngOnInit() {
    this.user = this.auth.user();
  }
}
