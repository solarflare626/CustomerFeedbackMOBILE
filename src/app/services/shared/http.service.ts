import { Injectable } from '@angular/core';
import { AngularHttpService } from './http/angular-http.service';
import { NativeHttpService } from './http/native-http.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private accessToken: string;
  private base_url: string = "localhost:3000/api/";

  private http: any;
  constructor(
    private angularHttp: AngularHttpService,
    private nativeHttp: NativeHttpService,
  ) { 
    if (window.cordova) {
      // running on device/emulator
      this.http = this.nativeHttp.getHttp();
    } else {
      // running in dev mode
      this.http = this.angularHttp.getHttp();
    }
  }

  formatUrl(url:string){
    if(this.accessToken){
      var indexOfQ = url.indexOf("?") ;
      var indexOfA = url.indexOf("&") ;

      if(indexOfQ && indexOfA){
        url = url + "&accessToken="+this.accessToken
      }else if(indexOfQ) {
        url = url + "&accessToken="+this.accessToken
      }else{
        url = url + "?accessToken="+this.accessToken
      }
    }
    return url;
  }
  setAccessToken(token){
    this.accessToken = token;
  }

  post(url,body,headers){
    return this.http.post(this.base_url+this.formatUrl(url),body,headers);
  }

  get(url,body,headers){
    return this.http.get(this.base_url+this.formatUrl(url),body,headers);
  }

  put(url,body,headers){
    return this.http.put(this.base_url+this.formatUrl(url),body,headers);
  }

  patch(url,body,headers){
    return this.http.patch(this.base_url+this.formatUrl(url),body,headers);
  }

  delete(url,parameters,headers){
    return this.http.delete(this.base_url+this.formatUrl(url),parameters,headers);
  }


}
