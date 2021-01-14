import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import * as global from '../global';


@Injectable({
  providedIn: 'root'
})
export class PreparedService {

  // public url = "http://127.0.0.1:3800";
  private url = global.apiUrl;

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  constructor(public http: HttpClient) { }

  public acceptorder(data): Observable<any> {
    console.log('ready order service:', { data });
    return this.http.post(this.url + '/readyAcpt', { 'data': data }).pipe(
      map(this.extractData));
  }

  public getAllRestaurants(): Observable<any> {
    return this.http.get(this.url + '/restprep').pipe(
      map(this.extractData));
  }
}
