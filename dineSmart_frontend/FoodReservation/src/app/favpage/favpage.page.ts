import { Component, OnInit } from '@angular/core';
import { LoginAPIService } from '../service/login-api.service';
import { APIBackendService } from '../service/apibackend.service';
import { Events, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { BookinginfoService } from '../service/bookinginfo.service';

@Component({
  selector: 'app-favpage',
  templateUrl: './favpage.page.html',
  styleUrls: ['./favpage.page.scss'],
})
export class FavpagePage implements OnInit {

  public isLoggedIn: boolean = false;
  public userName: string = '';
  public userEmail: string = '';
  public userId: any;
  userData: any;
  walletAmount: any;
  topUpButtonClicked: boolean = false;
  topUpAmount: number = 0;
  public walletData: any = { user_id: this.userId, wallet_amount: this.walletAmount };
  orderId: any;


  constructor(public userLoginApi: LoginAPIService, public userApi: APIBackendService, public events: Events,
    public toastController: ToastController, private router: Router, public bookingAPI: BookinginfoService) {



  }


  ngOnInit() {


    // user and time are the same arguments passed in `events.publish(user, time)`
    if (this.userLoginApi.getIsloggedIn() == true) {
      this.isLoggedIn = this.userLoginApi.getIsloggedIn();
      this.userName = this.userLoginApi.getName();
      console.log('header: isLoggedIn', this.isLoggedIn);
      this.userEmail = this.userLoginApi.getEmail();
      this.userId = this.userLoginApi.getUserId();

      this.orderId = this.bookingAPI.getOrderId();

      this.userApi.getCustomerDetailsById(this.userId).subscribe((data: {}) => {
        this.userData = data;
        this.walletAmount = this.userData[0].CWalletAmount;
        console.log('Data inside const', data);
        console.log('userData inside const', this.userData);
      });

    }



  }

  onClickTopUpButton() {
    this.topUpButtonClicked = true;
  }

  onClickAddToWallet() {
    this.topUpButtonClicked = false;
    this.walletAmount = this.walletAmount + this.topUpAmount;
    this.walletData.user_id = this.userId;
    this.walletData.wallet_amount = this.walletAmount;
    console.log('walletData', this.walletData);
    this.userApi.updateWallet(this.walletData).subscribe();
    this.presentToast();
    this.ngOnInit();

  }

  async presentToast() {
    const toast = await this.toastController.create({
      position: 'bottom',
      message: 'Wallet Top Up successfull!',
      duration: 2000
    });
    toast.present();
  }

  gotoWalletPaymentPage() {
    this.router.navigate(['wallet-payment', this.orderId]);
  }

}
