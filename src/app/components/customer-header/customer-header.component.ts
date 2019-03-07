import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
@Component({
  selector: 'customer-header',
  templateUrl: './customer-header.component.html',
  styleUrls: ['./customer-header.component.scss']
})
export class CustomerHeaderComponent implements OnInit {
  public isSearchBarFocused: boolean;
  public keyword : string;

  ionApp = <HTMLElement>document.getElementsByTagName('ion-app')[0];
  
  constructor(private navCtrl: NavController,private qrScanner: QRScanner) {
    this.isSearchBarFocused = false;
    this.keyword = "";
  }

  ngOnInit() {
  }

  openScanner(){
    console.log("open scanner");
    console.log(this.keyword);
    this.navCtrl.navigateForward('customer/qrscanner');
  }

  setKeyword(value){
    this.keyword = value;
  }

  search(){
    alert(this.keyword);
  }

}
