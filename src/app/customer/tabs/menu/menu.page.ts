import { Component, OnInit } from '@angular/core';
import { CustomerAuthenticationService } from '../../../services/customer/customer-authentication.service';


    
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  private user: any;
  constructor(private authService: CustomerAuthenticationService) { }

  ngOnInit() {
    this.user = this.authService.user();
    console.log("Menu user:",this.user);
  }

  logout(){
    this.authService.logout();
  }

}
