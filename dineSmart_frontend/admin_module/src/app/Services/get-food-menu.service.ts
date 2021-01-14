import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetFoodMenuService {

  public url = "http://127.0.0.1:3800";

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  constructor(public http: HttpClient) { }

  public getMenuItems(passed_id: number): Observable<any> {
    return this.http.get(this.url + '/foodinfo/' + passed_id).pipe(
      map(this.extractData));
  }

  public getMenuItemById(IdString: string): Observable<any> {
    console.log('service:IdString',IdString);
    return this.http.get(this.url + '/foodinfo_getItem/' + IdString).pipe(
      map(this.extractData));
  }


}
