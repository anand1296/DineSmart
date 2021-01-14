import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController, Events, AlertController } from '@ionic/angular';
import { LoginAPIService } from '../service/login-api.service';
import { APIBackendService } from '../service/apibackend.service';
import { RestaurantinfoService } from '../service/restaurantinfo.service';
import { BookinginfoService } from '../service/bookinginfo.service';

@Component({
  selector: 'app-wallet-payment',
  templateUrl: './wallet-payment.page.html',
  styleUrls: ['./wallet-payment.page.scss'],
})
export class WalletPaymentPage implements OnInit {

  public isLoggedIn: boolean = false;
  public userName: string = '';
  public userEmail: string = '';
  public userId = this.userLoginApi.getUserId();
  userData: any;
  walletAmount: any;
  billAmount: any;
  transactionId: any;

  orderid: any;
  restId: any;
  public restnTableIdData: any = { rest_id: '', table_id: '' };
  public RnTData: any;
  public pPoints: number = 0;
  public pData: any;
  pay_amt: number = 0;

  custOrderData: any = { OId: '', CId: '' };
  public walletData: any = { user_id: this.userId, wallet_amount: this.walletAmount };

  tableInfoData: any;

  constructor(public activatedRoute: ActivatedRoute, public userLoginApi: LoginAPIService,
    public userApi: APIBackendService, public events: Events,
    public toastController: ToastController, public restInfoService: RestaurantinfoService,
    private router: Router, public alertController: AlertController, public bookingAPI: BookinginfoService) {

    events.subscribe('user:created', () => {
      // user and time are the same arguments passed in `events.publish(user, time)`
      if (this.userLoginApi.getIsloggedIn() == true) {
        this.isLoggedIn = this.userLoginApi.getIsloggedIn();
        this.userName = this.userLoginApi.getName();
        console.log('header: isLoggedIn', this.isLoggedIn);
        this.userEmail = this.userLoginApi.getEmail();
        this.userId = this.userLoginApi.getUserId();

        this.userApi.getCustomerDetailsById(this.userId).subscribe((data: {}) => {
          this.userData = data;
          this.walletAmount = this.userData[0].CWalletAmount;
          console.log('Data inside const', data);
          console.log('userData inside const', this.userData);


        });

      }

    });

  }



  ngOnInit() {

    this.orderid = this.activatedRoute.snapshot.paramMap.get('passed_id');
    console.log('orderid', this.orderid);
    this.restInfoService.getRIdFromOId(this.orderid).subscribe((data: {}) => {

      this.restId = data;

      console.log('restId', this.restId);
      console.log('restId', this.restId[0].RId);

      this.userApi.getCustomerDetailsById(this.userId).subscribe((data: {}) => {
        this.userData = data;
        console.log('userData', this.userData);
        this.walletAmount = this.userData[0].CWalletAmount;
        console.log('Data inside ngOnit', data);
        console.log('userData inside ngOnit', this.userData);

        // this.restInfoService.getInfoFromDinesAt(this.orderid).subscribe((data: {}) => {
        //   this.tableInfoData = data;
        //   console.log('table info data:', this.tableInfoData);
        this.custOrderData.OId = this.orderid;
        this.custOrderData.CId = this.userId;
        console.log('custOrderData', this.custOrderData);
        console.log('JSON.stringify(this.custOrderData)', JSON.stringify(this.custOrderData));

        this.userLoginApi.getBill(JSON.stringify(this.custOrderData)).subscribe((data: {}) => {
          this.billAmount = data[0].bill;
        });
        this.bookingAPI.getPoint({ CId: this.userId, RId: this.restId[0].RId }).subscribe((data: {}) => {
          console.log("points")
          this.pData = data;
          for (let eachPoint of this.pData) {
            this.pPoints += eachPoint.priviledgePoints;
          }
          console.log(this.pPoints);
          this.pPoints = this.pPoints / 10;
          this.pay_amt = this.billAmount - this.pPoints;
          this.bookingAPI.getPoint({ CId: this.userId, RId: this.restId[0].RId }).subscribe((data: {}) => {


          });

        });


        //});

      });

    });
  }

  gotoWalletTopUp() {
    this.router.navigate(['favpage']);
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      //message: 'Your order will be sent to the kitchen',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel: ');
          }
        }, {
          text: 'Accept',
          handler: () => {
            console.log('Confirm Okay');
            this.payBill();
          }
        }
      ]
    });

    await alert.present();
  }

  payBill() {

    this.walletAmount = this.walletAmount - this.billAmount;
    console.log('walletData', this.walletAmount);
    this.walletData.user_id = this.userId;
    this.walletData.wallet_amount = this.walletAmount;

    this.userApi.updateWallet(this.walletData).subscribe();

    this.userLoginApi.changeBillStatus(this.custOrderData).subscribe();

    this.userLoginApi.getRnTIds(JSON.stringify(this.custOrderData)).subscribe((data: {}) => {
      this.RnTData = data;
      console.log('RnTData', this.RnTData);
      this.restnTableIdData.rest_id = this.RnTData[0].RId;
      this.restnTableIdData.table_id = this.RnTData[0].TId;
      this.transactionId = this.RnTData[0].transactionId;
      this.userLoginApi.setTransactionId(this.transactionId);
    });
    this.userLoginApi.changeTableBookingStatus(this.restnTableIdData).subscribe();

    this.presentToast();

    this.router.navigate(['exit-page', this.restnTableIdData.rest_id]);



  }


  async presentToast() {
    const toast = await this.toastController.create({
      position: 'bottom',
      message: 'Payment successfull!',
      duration: 2000
    });
    toast.present();
  }


}
