import { Component, OnInit } from '@angular/core';

import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-qrscanner',
  templateUrl: './qrscanner.page.html',
  styleUrls: ['./qrscanner.page.scss'],
})
export class QrscannerPage implements OnInit {

  constructor(private navCtrl: NavController,private qrScanner: QRScanner,private router: Router) { }

  ngOnInit() {
  }
  goBack(){
    this.router.navigateByUrl('/customer/home');
    // this.navCtrl.goBack();
  }

  ionViewWillLeave(){

    window.document.querySelector('.cameraBox').classList.remove('cameraView');
    this.qrScanner.destroy();
  }
  ionViewDidEnter(){
    this.qrScanner.prepare()
   .then((status: QRScannerStatus) => {
     if (status.authorized) {
       // camera permission was granted
         
       // start scanning
       this.qrScanner.show()
       window.document.querySelector('.cameraBox').classList.add('cameraView');

       let scanSub = this.qrScanner.scan().subscribe((text) => {

         console.log('Scanned something', text);

        //  window.document.querySelector('.cameraBox').classList.remove('cameraView');
         this.qrScanner.hide(); // hide camera preview
        
         //{"signed": "customer-feedback","type":"store-code","data":"1234"}
        //  alert(text);
         let data = null;
         try{
            data = JSON.parse(text.toString());
          //  alert(data);
         }catch(e){
           alert(e);
         }
         scanSub.unsubscribe(); // stop scanning
         this.router.navigateByUrl('/customer/home').then(() => {
          this.router.navigateByUrl('/customer/store-details/'+data.data).catch((e)=>{
            alert(e);
          });
        });
          // this.navCtrl.navigateBack('/customer/home').then(() => {
          //   this.navCtrl.navigateForward('/customer/store-details/'+data.data).catch((e)=>{
          //     alert(e);
          //   });
          // });
          
       });


     } else if (status.denied) {
         alert('camera permission was denied');
       // camera permission was permanently denied
       // you must use QRScanner.openSettings() method to guide the user to the settings page
       // then they can grant the permission from there
     } else {
       alert('You can ask for permission again at a later time.');
       // permission was denied, but not permanently. You can ask for permission again at a later time.
     }
   })
   .catch((e: any) => alert('Error is'+e));

}

}
