import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import * as global from '../global';
import { Events } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoginAPIService {

  // public url = "http://127.0.0.1:3800";
  private url = global.apiUrl;

  public userId = null;
  public email = null;
  public name = null;
  public phone = null;
  public isLoggedIn: boolean = false;
  public dob = null;

  public transactionId: number = 0;

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  constructor(public http: HttpClient, public events: Events) { }

  public authenticateUser(data): Observable<any> {
    return this.http.post(this.url + '/authenticateUser', data).pipe(
      map(this.extractData));
  }

  public setUserData(userid, email, name, dob, phone) {
    this.userId = userid;
    this.email = email;
    this.name = name;
    this.dob = dob;
    this.phone = phone;
    this.isLoggedIn = true;
  }

  public getUserId() {
    return this.userId;
  }

  public getEmail() {
    return this.email;
  }

  public getName() {
    return this.name;
  }

  public getPhone() {
    return this.phone;
  }

  public getDoB() {
    return this.dob;
  }

  public getIsloggedIn() {
    return this.isLoggedIn;
  }

  public clearUserData() {
    this.userId = null;
    this.email = null;
    this.name = null;
    this.phone = null;
    this.isLoggedIn = false;
  }

  public publishUser() {
    if (this.getIsloggedIn() == true) {
      this.events.publish('user:created');
    }
  }

  public getBill(dataString): Observable<any> {
    console.log('service:getBill dataString', dataString);
    return this.http.get(this.url + '/getBill/' + dataString).pipe(
      map(this.extractData));
  }


  public changeBillStatus(data): Observable<any> {
    console.log('service: changeBillStatus', data);
    return this.http.post(this.url + '/changeStatus', data).pipe(
      map(this.extractData));
  }

  public getRnTIds(dataString): Observable<any> {
    console.log('service:getRnTIds dataString', dataString);
    return this.http.get(this.url + '/getIds/' + dataString).pipe(
      map(this.extractData));
  }


  public changeTableBookingStatus(data): Observable<any> {
    console.log('service: changeTableBookingStatus', data);
    return this.http.post(this.url + '/changeTableBookingStatus', data).pipe(
      map(this.extractData));
  }

  public setTransactionId(transactionId) {
    this.transactionId = transactionId;
  }

  public getTransactionId() {
    return this.transactionId;
  }


}
