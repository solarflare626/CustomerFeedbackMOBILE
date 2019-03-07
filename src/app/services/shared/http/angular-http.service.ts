import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AngularHttpService {
  constructor(private http: Http) { }

  getHttp(){
    return this;
  }

  post(url,body,headers){
    console.log("url",url,"body", body);
    return new Promise((resolve, reject) => {
      this.http.post(url,body,headers)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  get(url,body,headers){
    return new Promise((resolve, reject) => {
      this.http.get(url,headers)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  put(url,body,headers){
    return new Promise((resolve, reject) => {
      this.http.put(url,body,headers)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  delete(url,body,headers){
    return new Promise((resolve, reject) => {
      this.http.delete(url,headers)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }


  patch(url,body,headers){
    return new Promise((resolve, reject) => {
      this.http.patch(url,body,headers)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  



}
