import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestaurantDetailsService {

  public url = "http://127.0.0.1:3800";

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  constructor(public http: HttpClient) { }

  public getRestaurant(passed_id): Observable<any> {
    return this.http.get(this.url + '/restinfo/' + passed_id).pipe(
      map(this.extractData));
  }

}
