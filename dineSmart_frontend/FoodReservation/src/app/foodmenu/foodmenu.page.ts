import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { APIBackendService } from '../service/apibackend.service';
import { FoodinfoService } from '../service/foodinfo.service';
import { ToastController, AlertController } from '@ionic/angular';
import { BookinginfoService } from '../service/bookinginfo.service';
import { LoginAPIService } from '../service/login-api.service';
import { Events } from '@ionic/angular';
import { Storage } from '@ionic/storage';



@Component({
  selector: 'app-foodmenu',
  templateUrl: './foodmenu.page.html',
  styleUrls: ['./foodmenu.page.scss'],
})
export class FoodmenuPage implements OnInit {


  automaticClose = false;
  passed_id: string;
  food_data: any;
  noOfItems = 0;
  quantity: any;
  cartData = [];
  total: number = 0;
  veg: boolean = false;
  public isLoggedIn: boolean = false;
  public userName: string = '';
  public userEmail: string = '';
  public userId: any;
  userBudget: number = 1000;
  budgetExceeded: boolean = false;

  //arrowClicked: boolean = false;
  arrowClicked: boolean[] = new Array(false);
  clickedItem: number;

  itemTypes: string[] = new Array("Soups", "Salads", "Quick Bites", "Starters",
    "Main Course", "Breads", "Rice", "Desserts", "Beverages");


  constructor(public router: Router, private activatedRoute: ActivatedRoute,
    public restaurantAPI: FoodinfoService, private toastCtrl: ToastController,
    public api: APIBackendService, public bookingAPI: BookinginfoService, public events: Events,
    private storage: Storage, public userLoginApi: LoginAPIService, public alertController: AlertController) {
    events.subscribe('user:created', () => {
      this.userId = this.userLoginApi.getUserId();
      this.userEmail = this.userLoginApi.getEmail();
      this.isLoggedIn = this.userLoginApi.getIsloggedIn();
    });

  }

  displayQty(itemId: number) {
    for (let eachItem of this.cartData) {
      if (eachItem.ItemID == itemId) {
        return eachItem.qty;
      }
    }
  }

  addItem(itemId: number) {
    for (let eachItem of this.cartData) {
      if (eachItem.ItemID == itemId) {
        eachItem.qty++;
        this.total += eachItem.price;

        break;
      }
    }
  }

  removeItem(itemId: number) {
    for (let eachItem of this.cartData) {
      if (eachItem.ItemID == itemId && eachItem.qty > 0) {
        eachItem.qty--;
        this.total -= eachItem.price;
        break;
      }
    }
  }


  ngOnInit() {
    this.passed_id = this.activatedRoute.snapshot.paramMap.get('r_id');
    this.restaurantAPI.getFood(this.passed_id).subscribe((data: {}) => {
      this.food_data = data;
      console.log('food_data:', this.food_data);
      console.log('itemTypes:', this.itemTypes);
      console.log('arrowClicked:', this.arrowClicked);

      for (let eachItem of this.food_data) {
        let obj = {
          ItemID: eachItem.ItemID,
          price: eachItem.Rate,
          qty: 0,
          userid: this.userLoginApi.getUserId(),
          r_id: this.passed_id,
          Name: eachItem.Name,
          Photo: eachItem.FImageAddress
        };

        this.cartData.push(obj);
      }
      this.food_data[0].open = true;

    });
    //this.food_data[0].open = true;


  }



  async buyItem(food_data) {
    let toast = await this.toastCtrl.create({
      message: 'Added : ${food_data.name}'
    });
    toast.present();
  }

  toggleSection(index) {
    this.food_data[index].open = !this.food_data[index].open;

    if (this.automaticClose && this.food_data[index].open) {
      this.food_data.filter((item, itemIndex) => itemIndex != index).map(item => item.open = false);
    }

  }

  toggleItem(index, childIndex) {
    this.food_data[index].children[childIndex].open = !this.food_data[index].children[childIndex].open;

  }
  order() {
    this.cartData.unshift({ 'total': this.total });
    this.restaurantAPI.setCartData(this.cartData);

    this.router.navigate(['cart-page']);

  }

  onClickArrowDropRight(clickedItem: number) {
    this.arrowClicked[clickedItem] = true;
    //this.clickedItem = clickedItem;
    console.log('item clicked', this.itemTypes[clickedItem]);
    console.log('onClickArrowDropRight: arrowClicked', this.arrowClicked);
  }

  onClickArrowDropDown(clickedItem: number) {
    this.arrowClicked[clickedItem] = false;
    //this.clickedItem = clickedItem;
    console.log('item clicked', this.itemTypes[clickedItem]);
    console.log('onClickArrowDropDown: arrowClicked', this.arrowClicked);
  }

  async itemDetails(clickedItem: number) {
    const alert = await this.alertController.create({
      header: this.food_data[clickedItem].Name,
      subHeader: 'Ingredients: ' + this.food_data[clickedItem].Ingredients,
      message: 'Rating: ' + this.food_data[clickedItem].FRating + '/5',
      buttons: [
        {
          text: 'Calories in 1 serving: '+this.food_data[clickedItem].caloriesInOneServing+' kcal',
          role:'cancel'
        }]
    });

    await alert.present();
  }


}
