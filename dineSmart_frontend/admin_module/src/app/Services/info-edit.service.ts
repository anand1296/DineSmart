import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InfoEditService {

  public url = "http://127.0.0.1:3800";

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  constructor(public http: HttpClient) { }

  public editRestaurantInfo(data): Observable<any> {
    console.log('inside InfoEditService - data: ',data);
    return this.http.post(this.url + '/restinfo', data).pipe(
      map(this.extractData));
  }

  public removeRestaurant(data): Observable<any> {
    console.log('inside Infodelete_Service - restrid: ',data);
    return this.http.post(this.url + '/restinfo_del', data).pipe(
      map(this.extractData));
  }

  public editItemData(data): Observable<any> {
    console.log('inside Service editItemData: ',data);
    return this.http.post(this.url + '/foodinfo_itemEdit', data).pipe(
      map(this.extractData));
  }

  public removeMenuItem(data): Observable<any> {
    console.log('inside Service removeMenuItem:',data);
    return this.http.post(this.url + '/foodinfo_del/', data).pipe(
      map(this.extractData));
  }

  public addNewMenuItem(data): Observable<any> {
    console.log('inside Service addNewMenuItem:',data);
    return this.http.post(this.url + '/foodinfo_insert/', data).pipe(
      map(this.extractData));
  }


}
