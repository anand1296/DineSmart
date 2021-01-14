import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import * as global from '../global';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  // public url = "http://127.0.0.1:3800";
  private url = global.apiUrl;

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  constructor(public http: HttpClient) { }


  public getAllReviewsByRId(): Observable<any> {
    return this.http.get(this.url + '/notifs').pipe(
      map(this.extractData));
  }


  public getPrep(): Observable<any> {
    return this.http.get(this.url + '/notifsP').pipe(
      map(this.extractData));
  }


  public getRead(): Observable<any> {
    return this.http.get(this.url + '/notifsR').pipe(
      map(this.extractData));
  }
}