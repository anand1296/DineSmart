import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import * as global from '../global';

@Injectable({
  providedIn: 'root'
})
export class RestaurantinfoService {

  // public url = "http://127.0.0.1:3800";
  private url = global.apiUrl;

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  constructor(public http: HttpClient) { }

  public getAllRestaurants(): Observable<any> {
    return this.http.get(this.url + '/restinfo').pipe(
      map(this.extractData));
  }
  public getRestaurant(passed_id): Observable<any> {
    return this.http.get(this.url + '/restinfo/' + passed_id).pipe(
      map(this.extractData));
  }
  public getRestaurantByName(name): Observable<any> {
    return this.http.get(this.url + '/restinfo/' + name).pipe(
      map(this.extractData));
  }
  public getTable(name): Observable<any> {
    return this.http.get(this.url + '/table_info/' + name).pipe(
      map(this.extractData));
  }

  public getRIdFromOId(passed_id): Observable<any> {
    return this.http.get(this.url + '/restinfo_getRId/' + passed_id).pipe(
      map(this.extractData));
  }

  public getInfoFromDinesAt(passed_id): Observable<any> {
    console.log('service getInfoFromDinesAt', passed_id);
    return this.http.get(this.url + '/dines_at/' + passed_id).pipe(
      map(this.extractData));
  }

}
