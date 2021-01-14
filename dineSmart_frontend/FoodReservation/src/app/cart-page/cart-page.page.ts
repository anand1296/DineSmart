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
  selector: 'app-cart-page',
  templateUrl: './cart-page.page.html',
  styleUrls: ['./cart-page.page.scss'],
})
export class CartPagePage implements OnInit {
  public cartData: any;
  cart = [];
  final_order = [];
  passed_id: string;
  food_data: any;
  noOfItems = 0;
  quantity: any;
  total: number = 0;
  public isLoggedIn: boolean = false;
  public userName: string = '';
  public userEmail: string = '';
  public userId: any;
  r_id: any;
  orderid: any;
  countDown;
  counter = 1200;
  tick = 1000;
  public showCounter: boolean = false;
  showOrderButton: boolean;
  tId: any;
  public noteToChef: string = '';
  enableNote: boolean = true;


  constructor(public router: Router, private activatedRoute: ActivatedRoute, public restaurantAPI: FoodinfoService,
    private toastCtrl: ToastController, public api: APIBackendService, public bookingAPI: BookinginfoService,
    public events: Events, private storage: Storage, public userLoginApi: LoginAPIService,
    public alertController: AlertController, public toastController: ToastController) {
    events.subscribe('user:created', () => {
      this.userId = this.userLoginApi.getUserId();
      this.userEmail = this.userLoginApi.getEmail();
      this.isLoggedIn = this.userLoginApi.getIsloggedIn();
    });

    console.log('isLOggedIn inside constructor', this.isLoggedIn);
  }

  ngOnInit() {
    this.showOrderButton = true;
    this.userId = this.userLoginApi.getUserId();
    this.userEmail = this.userLoginApi.getEmail();
    this.isLoggedIn = this.userLoginApi.getIsloggedIn();
    console.log('isLOggedIn inside ngOnit', this.isLoggedIn);
    console.log('showOrderButton inside ngOnit', this.showOrderButton);
    this.cartData = this.restaurantAPI.getCartData();
    console.log('cart data', this.cartData);
    this.passed_id = this.cartData[1].r_id;
    for (let eachItem of this.cartData) {
      if (eachItem.qty > 0) {
        this.cart.push(eachItem);
      }
    }

    this.total = this.cartData[0].total;
    for (let eachItem of this.cart) {
      let obj = {
        ItemID: eachItem.ItemID,
        price: eachItem.price,
        qty: eachItem.qty,

      };
      this.r_id = eachItem.r_id;

      this.final_order.push(obj);
    }


    this.final_order.unshift({ total: this.total });
    this.final_order.unshift({ userid: this.userLoginApi.getUserId() });
    this.final_order.unshift({ r_id: this.r_id });

    console.log("Cart Data");
    console.log(this.cart);




  }


  async promptLogin() {
    const toast = await this.toastController.create({
      position: 'middle',
      message: 'You are not logged in! Please Login to place your Order!',
      duration: 2000
    });
    toast.present();
  }


  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Your order will be sent to the kitchen',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Accept',
          handler: () => {
            console.log('Confirm Okay');
            this.showOrderButton = false;
            this.order();
          }
        }
      ]
    });

    await alert.present();
  }

  order() {



    console.log('final order', this.final_order);
    this.bookingAPI.setOrderData(this.cart);

    if (this.noteToChef == '') {
      this.noteToChef = '-';
      this.final_order.unshift({ note_to_chef: this.noteToChef });
    }

    this.bookingAPI.createOrder(this.final_order).subscribe((data: {}) => {
      this.orderid = data;
      console.log('order id', this.orderid);
      this.countDown = Observable.timer(0, this.tick)
        .take(this.counter)
        .map(() => --this.counter)
      // this.router.navigate(['profile', this.orderid.id]);
      this.showCounter = true;

      this.bookingAPI.setOrderId(this.orderid.id);
      this.tId = this.bookingAPI.getTableId();
      // var point = this.total / 10;

      this.bookingAPI.setOId({ OId: this.orderid.id, CId: this.userLoginApi.getUserId(), RId: this.r_id, TId: this.tId }).subscribe((data: {}) => {
        console.log('setOid successfull!');
      });

    });



  }


  onClick() {
    this.router.navigate(['payment', this.orderid.id]);
  }
  confirm() {
    this.enableNote = false;
    console.log(this.noteToChef)
    this.final_order.unshift({ note_to_chef: this.noteToChef });
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
