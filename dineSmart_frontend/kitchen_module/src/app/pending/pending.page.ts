import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Events } from '@ionic/angular';
import { PendingService } from '../service/pending.service';
import { Storage } from '@ionic/storage';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-pending',
  templateUrl: './pending.page.html',
  styleUrls: ['./pending.page.scss'],
})
export class PendingPage implements OnInit {

  public restaurantName: string = '';
  public restaurantAddress: string = '';
  public allRestaurantData: any;
  restData = [];
  searchRest: string;
  public RestData: any;
  public RestNameId: any = [];
  public currentDD: any;
  public orderid: any;
  public note: string = '';
  count: number = 0;
  test: string = '';



  constructor(public modalController: ModalController,
    private router: Router, public restaurantAPI: PendingService,
    private storage: Storage, public events: Events) {

  }


  ngOnInit() {
    this.restaurantAPI.getAllRestaurants().subscribe((data: {}) => {
      this.allRestaurantData = data;

      console.log(this.allRestaurantData);
      for (let each of this.allRestaurantData) {
        this.restaurantAPI.getNote(each.OId).subscribe((data: {}) => {
          console.log("Insert data output")
          console.log(data)
          this.test = data[0].noteToChef;


          let obj = {
            id: each.OId,
            cust: each.CId,
            name: each.Name,
            note: this.test,
            qty: each.qty
          }
          this.restData.push(obj)
          console.log(obj)

        });
      }
      for (var eachrestaurant of this.allRestaurantData) {
        let obj = {
          id: eachrestaurant.CId,
          name: eachrestaurant.ItemID,
        }
        this.RestNameId.push(obj);
      }
    });

  }

  accept(order) {
    this.restaurantAPI.acceptorder(order).subscribe((data: {}) => {
      this.orderid = data;
      console.log(this.orderid);

      let index: number = this.restData.findIndex(d => d.id === order);
      this.restData.splice(index, 1);

      // this.router.navigate(['/pending']);

    });


  }


}