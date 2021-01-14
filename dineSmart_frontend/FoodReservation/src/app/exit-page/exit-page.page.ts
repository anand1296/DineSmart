import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantinfoService } from '../service/restaurantinfo.service';
import { Events, ModalController } from '@ionic/angular';
import { LoginAPIService } from '../service/login-api.service';
import { ModalComponent } from '../components/modal/modal.component';

@Component({
  selector: 'app-exit-page',
  templateUrl: './exit-page.page.html',
  styleUrls: ['./exit-page.page.scss'],
})
export class ExitPagePage implements OnInit {

  public restId: any;
  public RestaurantData: any;
  public rest_name: any;

  public isLoggedIn: boolean = false;
  public userName = this.userLoginApi.getName();
  public userEmail: string = '';
  public userId: any;

  transactionId: any = this.userLoginApi.getTransactionId();

  constructor(public activatedRoute: ActivatedRoute, public restaurantAPI: RestaurantinfoService, 
    public events: Events, public userLoginApi: LoginAPIService, public modalController: ModalController, 
    public router: Router) {

    events.subscribe('user:created', () => {
      this.userId = this.userLoginApi.getUserId();
      this.userEmail = this.userLoginApi.getEmail();
      this.isLoggedIn = this.userLoginApi.getIsloggedIn();
      this.userName = this.userLoginApi.getName();
    });

   }

  ngOnInit() {

    this.restId = this.activatedRoute.snapshot.paramMap.get('passed_id');
    console.log('restId', this.restId);

    this.restaurantAPI.getRestaurant(this.restId).subscribe((data: {}) => {
      this.RestaurantData = data;
      console.log(this.RestaurantData[0]);
      this.rest_name = this.RestaurantData[0].RName;

      this.transactionId = this.userLoginApi.getTransactionId();

    });


  }

  signOut(){
    this.userLoginApi.clearUserData();
    this.isLoggedIn = false;
    console.log('user logged out: isLggedIn', this.isLoggedIn);
    this.userName = '';
    this.userEmail = '';

    this.presentModal();
  
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalComponent,
      componentProps: { value: 123 },
      backdropDismiss: true
    });
    return await modal.present();
  }


  gotoHome(){
    this.router.navigate(['/home']);
  }

}
