import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import * as global from '../global';

@Injectable({
  providedIn: 'root'
})
export class EditinfoService {

  // public url = "http://127.0.0.1:3800";
  private url = global.apiUrl;

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  constructor(public http: HttpClient) { }

  public createotp(data): Observable<any> {
    return this.http.post(this.url + '/editinfo', data).pipe(
      map(this.extractData));
  }
}
