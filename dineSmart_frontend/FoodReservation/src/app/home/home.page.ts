import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { ModalComponent } from '../components/modal/modal.component';
import { APIBackendService } from '../service/apibackend.service';
import { RestaurantinfoService } from '../service/restaurantinfo.service';
import { LoginAPIService } from '../service/login-api.service';
import { Storage } from '@ionic/storage';
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public restaurantName: string = '';
  public restaurantAddress: string = '';
  public allRestaurantData: any;
  searchRest: string;
  public RestData: any;
  public RestNameId: any = [];
  public currentDD: any;

  constructor(public modalController: ModalController, public api: APIBackendService,
    private router: Router, public restaurantAPI: RestaurantinfoService,
    private storage: Storage, public events: Events, public loginApi: LoginAPIService, ) {


    this.restaurantAPI.getAllRestaurants().subscribe((data: {}) => {
      this.allRestaurantData = data;
      for (var eachrestaurant of this.allRestaurantData) {
        let obj = {
          id: eachrestaurant.RId,
          name: eachrestaurant.RName,
        }
        this.RestNameId.push(obj);
      }
    });

  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalComponent,
      componentProps: { value: 123 },
      backdropDismiss: true
    });
    return await modal.present();
  }

  onClickRestaurant(eachRest: any) {

    this.router.navigate(['restaurant-expand', eachRest.RId]);
  }
  ngOnInit() {
    this.loginApi.publishUser();
  }
  searchRests(event) {
    if (event.target.value == '') {
      this.currentDD = [];
    } else {
      this.currentDD = this.RestNameId.filter(v => new RegExp(event.target.value, 'gi').test(v.name)).slice(0, 10);
    }

  }

  redirectToRestuarant(restObj: any) {
    this.router.navigate(['restaurant-expand', restObj.id]);
  }
}

