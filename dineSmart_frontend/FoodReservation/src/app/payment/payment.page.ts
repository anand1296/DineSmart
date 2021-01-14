import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { APIBackendService } from '../service/apibackend.service';
import { FoodinfoService } from '../service/foodinfo.service';
import { ToastController, AlertController } from '@ionic/angular';
import { BookinginfoService } from '../service/bookinginfo.service';
import { Events } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/take'
import { Pipe, PipeTransform } from '@angular/core';
import { LoginAPIService } from '../service/login-api.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  cartData: any;
  cart = [];
  final_order = [];
  public passed_id: any;
  food_data: any;
  noOfItems = 0;
  quantity: any;
  total: number = 0;
  public isLoggedIn: boolean = false;
  public userName: string = '';
  public userEmail: string = '';
  public userId: any;
  public allOrder: any;
  public order: any;
  r_id: any;
  orderid: any;
  countDown;
  counter = 1200;
  tick = 1000;
  public showCounter: boolean = false;
  showOrderButton: boolean;
  currentOrder: any = [];
  currOrder: any;
  bill: any;
  point: number = 0;

  constructor(public router: Router, private activatedRoute: ActivatedRoute, public restaurantAPI: FoodinfoService,
    private toastCtrl: ToastController, public api: APIBackendService, public bookingAPI: BookinginfoService,
    public events: Events, private storage: Storage, public userLoginApi: LoginAPIService,
    public alertController: AlertController, public toastController: ToastController) {

    events.subscribe('user:created', () => {
      this.userId = this.userLoginApi.getUserId();
      this.userEmail = this.userLoginApi.getEmail();
      this.isLoggedIn = this.userLoginApi.getIsloggedIn();
    });

  }

  ngOnInit() {

    this.userId = this.userLoginApi.getUserId();
    this.userEmail = this.userLoginApi.getEmail();
    this.isLoggedIn = this.userLoginApi.getIsloggedIn();
    this.orderid = this.activatedRoute.snapshot.paramMap.get('passed_id');
    this.currOrder = this.bookingAPI.getCurrOrder();
    console.log('curr order:', this.currOrder);
    console.log('orderid:', this.orderid);
    this.bookingAPI.getAllOrder(this.userId).subscribe((data: {}) => {
      this.allOrder = data;
      console.log("-------------------------------")
      console.log('allOrder', this.allOrder);
      for (let eachItem of this.currOrder) {

        let obj = {
          Name: eachItem.Name,
          qty: eachItem.qty,
          price: eachItem.qty * eachItem.price,
        };
        this.currentOrder.push(obj);
        this.total += eachItem.qty * eachItem.price;


      }
      this.currentOrder.unshift({ total: this.total });
      console.log('current order:', this.currentOrder);
      this.point = this.total / 10;
      this.bookingAPI.setPoint({ point: this.point, OId: this.orderid }).subscribe((data: {}) => {
        console.log('setOid successfull!');
      });
    });




  }

  walletPayment() {
    this.router.navigate(['wallet-payment', this.orderid]);
  }

}
