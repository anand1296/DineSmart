import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-fooditemslist',
  templateUrl: './fooditemslist.component.html',
  styleUrls: ['./fooditemslist.component.scss']
})
export class FooditemslistComponent implements OnInit {



  constructor(private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  async buyItem(foodItem) {
    let toast = await this.toastCtrl.create({
      message: `Added to the cart`
    });
    toast.present();
  }

}
