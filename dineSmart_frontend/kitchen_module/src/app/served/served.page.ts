import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Events } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ModalController } from '@ionic/angular';
import { ServedService } from '../service/served.service';

@Component({
  selector: 'app-served',
  templateUrl: './served.page.html',
  styleUrls: ['./served.page.scss'],
})
export class ServedPage implements OnInit {

  public restaurantName: string = '';
  public restaurantAddress: string = '';
  public allRestaurantData: any;
  searchRest: string;
  public RestData: any;
  public RestNameId: any = [];
  public currentDD: any;

  constructor(public modalController: ModalController,
    private router: Router, public restaurantAPI: ServedService,
    private storage: Storage, public events: Events)
    {
      this.restaurantAPI.getAllRestaurants().subscribe((data: {}) => {
        this.allRestaurantData = data;
        for (var eachrestaurant of this.allRestaurantData) {
          let obj = {
            id: eachrestaurant.CId,
            name: eachrestaurant.ItemID,
          }
          this.RestNameId.push(obj);
        }
      });
    }


  ngOnInit() {
  }

}
