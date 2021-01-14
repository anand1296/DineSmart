import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ActionSheetController } from '@ionic/angular';
import { Events } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { APIBackendService } from '../service/apibackend.service';
import { RestaurantinfoService } from '../service/restaurantinfo.service';
import { BookinginfoService } from '../service/bookinginfo.service';
import { LoginAPIService } from '../service/login-api.service';
import { Router } from '@angular/router';
import { Time, each } from 'highcharts';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  public isLoggedIn: boolean = false;
  public userName: string = '';
  public userEmail: string = '';
  public userId: any;
  public allOrder: any;
  public passed_id: any;
  public unique_Order = [];
  count: number = 0;
  uniqueOId: any;
  total: any;
  bill: number = 0;

  constructor(private storage: Storage, public events: Events, private activatedRoute: ActivatedRoute,
    public restaurantAPI: RestaurantinfoService, public api: APIBackendService,
    public bookingAPI: BookinginfoService, public router: Router,
    public userLoginApi: LoginAPIService, public datePipe: DatePipe) { }

  ngOnInit() {
    this.userId = this.userLoginApi.getUserId();
    this.userEmail = this.userLoginApi.getEmail();
    this.isLoggedIn = this.userLoginApi.getIsloggedIn();
    this.passed_id = this.activatedRoute.snapshot.paramMap.get('passed_id');
    this.allOrder = this.bookingAPI.getOrderData();
    console.log("All Order");
    console.log(this.allOrder);
    console.log(this.allOrder[0].OId);
    for (let eachOd of this.allOrder) {
      if (eachOd.OId == this.passed_id) {
        this.total = eachOd.qty * eachOd.price
        let obj = {
          name: eachOd.Name,
          qty: eachOd.qty,
          price: eachOd.price,
          total: this.total,

        }
        this.bill = this.bill + this.total;

        this.unique_Order.push(obj);

      }
      console.log(this.unique_Order)
    }

  }

}
