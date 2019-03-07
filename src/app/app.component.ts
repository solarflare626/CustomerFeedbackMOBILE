import { Component,QueryList, ViewChildren, ViewChild } from '@angular/core';

import { Platform, ModalController, MenuController, ActionSheetController, PopoverController, IonRouterOutlet } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


import { Router } from '@angular/router';
import { CustomerAuthenticationService } from './services/customer/customer-authentication.service';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  // set up hardware back button event.
  lastTimeBackPress = 0;
  timePeriodToExit = 2000;
  back_button_off = [ '/login','/customer/home/tabs/stores','/customer/home/tabs/reviews','/customer/home/tabs/menu','/customer/home/tabs','/customer/home' ];
  // @ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;
  @ViewChild(IonRouterOutlet) routerOutlet: IonRouterOutlet;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private customerAuthenticationService: CustomerAuthenticationService,
    private router: Router,
    private toast: ToastController,
    public modalCtrl: ModalController,
    private menu: MenuController,
    private actionSheetCtrl: ActionSheetController,
    private popoverCtrl: PopoverController,
  ) {
    this.statusBar.hide();
    this.initializeApp();

    this.backButtonEvent();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.customerAuthenticationService.authenticationState.subscribe(state => {
        if (state) {
            this.router.navigate(['customer', 'home']).then(() => {
              if(this.customerAuthenticationService.initialized())
                this.splashScreen.hide();
            });
          
        } else {
          this.router.navigate(['login']).then(() => {
            if(this.customerAuthenticationService.initialized())
                this.splashScreen.hide();
          });;
        }

      });

    });
  }

  backButtonEvent() {
    this.platform.backButton.subscribeWithPriority(101,async () => {
      // close action sheet
      // try {
      //   const element = await this.actionSheetCtrl.getTop();
      //   if (element) {
      //     element.dismiss();
      //     return;
      //   }
      // } catch (error) {

      //   // alert(error);
      // }


      // // close popover
      // try {
      //   const element = await this.popoverCtrl.getTop();
      //   if (element) {
      //     element.dismiss();
      //     return;
      //   }
      // } catch (error) {

      //   // alert(error);
      // }

      // // close modal
      // try {
      //   const element = await this.modalCtrl.getTop();
      //   if (element) {
      //     element.dismiss();
      //     return;
      //   }
      // } catch (error) {
      //   // alert(error);

      // }

      // // close side menua
      // try {
      //   const element = await this.menu.getOpen();
      //   if (element !== null) {
      //     this.menu.close();
      //     return;

      //   }

      // } catch (error) {
      //   // alert(error);
      // }
        if (this.routerOutlet && !this.back_button_off.includes(this.router.url)) {
          this.routerOutlet.pop();
        } else if (this.back_button_off.includes(this.router.url)) {
          if (new Date().getTime() - this.lastTimeBackPress < this.timePeriodToExit) {
            // this.platform.exitApp(); // Exit from app
            navigator['app'].exitApp(); // work for ionic 4

          } else {
            const toastmessage = await this.toast.create({
              message: 'Press back again to exit App.',
              // showCloseButton: true,
              duration: 2000,
              position: 'bottom',
              closeButtonText: 'Done'
            });
            toastmessage.present();
            // this.toast.show(
            //   ``,
            //   '2000',
            //   'center')
            //   .subscribe(toast => {
            //     // alert(JSON.stringify(toast));
            //   });
            this.lastTimeBackPress = new Date().getTime();
          }
        }
    });
  }
}
