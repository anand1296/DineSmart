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
import { Time } from 'highcharts';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
  public isLoggedIn: boolean = false;
  public userName: string = '';
  public userEmail: string = '';
  public userId: any;
  public allOrder: any;
  public order: any;
  public order_id = [];
  public unique_Order = [];
  count: number = 0;
  uniqueOId: any;

  constructor(private storage: Storage, public events: Events, private activatedRoute: ActivatedRoute,
    public restaurantAPI: RestaurantinfoService, public api: APIBackendService,
    public bookingAPI: BookinginfoService, public router: Router,
    public userLoginApi: LoginAPIService, public datePipe: DatePipe) { }

  ngOnInit() {

    this.userId = this.userLoginApi.getUserId();
    this.userEmail = this.userLoginApi.getEmail();
    this.isLoggedIn = this.userLoginApi.getIsloggedIn();
    this.bookingAPI.getAllOrder(this.userLoginApi.getUserId()).subscribe((data: {}) => {
      console.log("-------group by")
      console.log('all orders', data);
      this.allOrder = data;
      this.bookingAPI.setOrderData(this.allOrder);
      for (let eachOd of this.allOrder) {
        this.order_id[this.count] = eachOd.OId;
        this.count++;

      }
      const unique = (value, index, self) => {
        return self.indexOf(value) === index
      }
      this.uniqueOId = this.order_id.filter(unique)
      console.log(this.uniqueOId)
      this.count = 0;
      for (let eachOd of this.allOrder) {
        if (eachOd.OId == this.uniqueOId[this.count]) {
          var ts = new Date(eachOd.date);
          let obj = {
            id: eachOd.OId,
            name: eachOd.RName,
            bill: eachOd.bill,
            date: ts.toDateString()
          }
          this.unique_Order.push(obj);
          this.count++;

        }
        console.log(this.unique_Order)
      }
    });



  }
  onClickOrder(eachOrder) {
    console.log(eachOrder.id)
    this.router.navigate(['list', eachOrder.id]);
  }

}
