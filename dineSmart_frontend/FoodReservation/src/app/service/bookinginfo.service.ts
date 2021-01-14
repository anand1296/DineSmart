import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import * as global from '../global';

@Injectable({
  providedIn: 'root'
})
export class BookinginfoService {
  public orderData: any;
  public currOrder: any;
  public tableId: any;
  public orderId: any;

  // public url = "http://127.0.0.1:3800";
  private url = global.apiUrl;

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  constructor(public http: HttpClient) { }

  public create_a_booking_session(data): Observable<any> {
    console.log('inside create a book sess service');
    return this.http.post(this.url + '/bookinfo', data).pipe(
      map(this.extractData));
  }
  public create_a_session(data): Observable<any> {
    console.log('inside create sess service');
    return this.http.post(this.url + '/booksess', data).pipe(
      map(this.extractData));
  }

  public setOId(data): Observable<any> {
    console.log('inside setOId service: data', data);
    return this.http.post(this.url + '/setOId', data).pipe(
      map(this.extractData));
  }
  public setPoint(data): Observable<any> {
    console.log('inside setPoint service');
    return this.http.post(this.url + '/setPoint', data).pipe(
      map(this.extractData));
  }
  public getPoint(data): Observable<any> {
    console.log('inside getPoint service');
    return this.http.post(this.url + '/getPoint', data).pipe(
      map(this.extractData));
  }
  public setZero(data): Observable<any> {
    console.log('inside getPoint service');
    return this.http.post(this.url + '/setZero', data).pipe(
      map(this.extractData));
  }

  public createOrder(data): Observable<any> {
    console.log('inside service create order: final order data', data);
    return this.http.post(this.url + '/order', data).pipe(
      map(this.extractData));
  }
  public getOrder(passed_id): Observable<any> {

    return this.http.get(this.url + '/order/' + passed_id).pipe(
      map(this.extractData));
  }


  public getAllOrder(passed_id): Observable<any> {

    return this.http.get(this.url + '/orders/' + passed_id).pipe(
      map(this.extractData));
  }

  public setOrderData(orderobj) {
    this.orderData = orderobj;
  }
  public getOrderData() {
    return this.orderData;
  }
  public setCurrOrder(orderobj) {
    this.currOrder = orderobj;
  }
  public getCurrOrder() {
    return this.orderData;
  }

  public setTableId(tableId) {
    this.tableId = tableId;
  }

  public getTableId() {
    return this.tableId;
  }

  public setOrderId(orderId) {
    this.orderId = orderId;
  }

  public getOrderId() {
    return this.orderId;
  }


}