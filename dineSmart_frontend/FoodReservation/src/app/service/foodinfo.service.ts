import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import * as global from '../global';

@Injectable({
  providedIn: 'root'
})
export class FoodinfoService {

  // public url = "http://127.0.0.1:3800";
  private url = global.apiUrl;

  public cartData: any;

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  constructor(public http: HttpClient) { }


  public getFood(passed_id): Observable<any> {
    return this.http.get(this.url + '/foodinfo/' + passed_id).pipe(
      map(this.extractData));
  }

  public setCartData(cartObj) {
    this.cartData = cartObj;
  }

  public getCartData() {
    return this.cartData;
  }

}
