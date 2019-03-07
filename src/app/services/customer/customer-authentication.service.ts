import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { HttpService } from '../shared/http.service';


const TOKEN_KEY = 'customer-auth';

@Injectable({
  providedIn: 'root'
})
export class CustomerAuthenticationService {

  authenticationState = new BehaviorSubject(false);
  isInitialized = false;
  private logged_user: any;
  private auth_token: string;

  constructor(private storage: Storage, private plt: Platform, private httpService: HttpService) {
    // this.plt.ready().then(() => {
    this.checkToken();
    // });
  }

  getAuthToken() {
    return this.auth_token;
  }

  checkToken() {
    this.storage.get(TOKEN_KEY + '-user').then(user => {
      if (user) {
        this.logged_user = JSON.parse(user);
        this.logged_user.picture = "https://articles-images.sftcdn.net/wp-content/uploads/sites/3/2016/01/wallpaper-for-facebook-profile-photo.jpg";
        this.authenticationState.next(true);
      }
    }).finally(() => {
      this.isInitialized = true;
    });

    this.storage.get(TOKEN_KEY + '-token').then(token => {
      if (token) {
        this.auth_token = token;
      }
    });

  }
  initialized() {
    return this.isInitialized;
  }

  login(user) {
    this.storage.set(TOKEN_KEY, JSON.stringify(user)).then(() => {
      this.logged_user = user;
      this.authenticationState.next(true);
    });
  }

  register(data) {
    this.httpService.post("users/customer/register",data,{}).then((data)=>{
        console.log("data");

      });

  }


  user() {
    return this.logged_user;
  }

  logout() {
    this.storage.remove(TOKEN_KEY + '-user').then(() => {
      this.storage.remove(TOKEN_KEY + '-token').then(() => {
        this.auth_token = null,
          this.logged_user = null;
        this.authenticationState.next(false);
      });
    });
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }
}
