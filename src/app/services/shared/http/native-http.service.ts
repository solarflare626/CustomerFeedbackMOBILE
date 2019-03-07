import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
@Injectable({
  providedIn: 'root'
})
export class NativeHttpService {
  
  constructor(public http: HTTP){

  }

 getHttp(){
   return this.http;
 }
}
