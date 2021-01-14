import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import * as global from '../global';


@Injectable({
  providedIn: 'root'
})
export class PendingService {

  // public url = "http://127.0.0.1:3800";
  private url = global.apiUrl;

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  constructor(public http: HttpClient) { }

  public acceptorder(data): Observable<any> {
    console.log('accept order service:', { data });
    return this.http.post(this.url + '/accept', { "data": data }).pipe(
      map(this.extractData));
  }
  public getNote(data): Observable<any> {

    return this.http.post(this.url + '/getNote', { id: data }).pipe(
      map(this.extractData));
  }

  public getAllRestaurants(): Observable<any> {
    return this.http.get(this.url + '/restpend').pipe(
      map(this.extractData));
  }


}