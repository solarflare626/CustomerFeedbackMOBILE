import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { CustomerAuthenticationService } from 'src/app/services/customer/customer-authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  private user: any = {
    student_id: null,
    firstname: null,
    lastname: null,
    email: null,
    password: null,
    confirm_password: null
	};
	private toast: any;
	constructor(
		private toastController: ToastController,
		private auth: CustomerAuthenticationService) { }

	async presentToast() {
    let toast = await this.toastController.create({
			message: 'Creating account, please wait...',
			duration: 2000
		});
   	toast.present();
	}
	
	
  submit(value: any, valid: boolean) {
		if (valid) {
			this.presentToast();
			this.auth.register(this.user);

		}
	};

  ngOnInit() {
  }

}
