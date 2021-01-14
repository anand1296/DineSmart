
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { APIBackendService } from '../service/apibackend.service';
import { FoodinfoService } from '../service/foodinfo.service';
import { ToastController } from '@ionic/angular';
import { BookinginfoService } from '../service/bookinginfo.service';
import { Events } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/timer'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/take'
import { Pipe, PipeTransform } from '@angular/core';
import { LoginAPIService } from '../service/login-api.service';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  public isLoggedIn: boolean = false;
  public userName: string = '';
  public userEmail: string = '';
  public oid: any;
  countDown;
  counter = 1800;
  tick = 1000;



  constructor(public router: Router, private activatedRoute: ActivatedRoute, public restaurantAPI: FoodinfoService, private toastCtrl: ToastController, public api: APIBackendService, public bookingAPI: BookinginfoService, public events: Events, private storage: Storage, public userLoginApi: LoginAPIService) {
    events.subscribe('user:created', () => {
      this.isLoggedIn = this.userLoginApi.getIsloggedIn();
      this.userName = this.userLoginApi.getName();
      this.userEmail = this.userLoginApi.getEmail();
    });

  }

  ngOnInit() {
    this.oid = this.activatedRoute.snapshot.paramMap.get('oid');
    console.log(this.oid)
    this.countDown = Observable.timer(0, this.tick)
      .take(this.counter)
      .map(() => --this.counter)


    // set the data
  }



}
@Pipe({
  name: 'formatTime'
})
export class FormatTimePipe implements PipeTransform {

  transform(value: number): string {
    const minutes: number = Math.floor(value / 60);
    return ('00' + minutes).slice(-2) + ':' + ('00' + Math.floor(value - minutes * 60)).slice(-2);
  }

}
