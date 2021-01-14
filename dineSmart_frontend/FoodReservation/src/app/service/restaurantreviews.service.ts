import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import * as global from '../global';


@Injectable({
  providedIn: 'root'
})
export class RestaurantreviewsService {

  // public url = "http://127.0.0.1:3800";
  private url = global.apiUrl;

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  constructor(public http: HttpClient) { }


  public getAllReviewsByRId(passed_id): Observable<any> {
    return this.http.get(this.url + '/getSetReview/' + passed_id).pipe(
      map(this.extractData));
  }

  public createReview(data): Observable<any> {
    console.log('inside reviewService', data);
    return this.http.post(this.url + '/getSetReview', data).pipe(
      map(this.extractData));
  }

}
