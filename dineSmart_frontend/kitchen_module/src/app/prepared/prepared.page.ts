import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Events } from '@ionic/angular';
import { PreparedService } from '../service/prepared.service';
import { Storage } from '@ionic/storage';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-prepared',
  templateUrl: './prepared.page.html',
  styleUrls: ['./prepared.page.scss'],
})
export class PreparedPage implements OnInit {
  public restaurantName: string = '';
  public restaurantAddress: string = '';
  public allRestaurantData: any;
  searchRest: string;
  public RestData: any;
  public RestNameId: any = [];
  public currentDD: any;

  constructor(public modalController: ModalController,
    private router: Router, public restaurantAPI: PreparedService,
    private storage: Storage, public events: Events) {
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

  accept(order) {
    this.restaurantAPI.acceptorder(order).subscribe((data: {}) => {

      //  this.storage.set('Oid', data['Oid']);
      // this.router.navigate(['/pending']);

    });
    let index: number = this.allRestaurantData.findIndex(d => d.id === order);
    this.allRestaurantData.splice(index, 1);

  }

}
