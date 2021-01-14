import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantDetailsService } from '../Services/restaurant-details.service';
import {GetFoodMenuService} from '../Services/get-food-menu.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  sliderOpts = {
    zoom: false,
    slidesPerView: 1.5,
    centeredSlides: true,
    spaceBetween: 10

  }

  passed_id: string;
  RestaurantData: any;
  name: any;
  address: any;
  cuisine: any;
  img: any;
  rating: any;
  id: any;
  isLoggedIn: boolean = false;
  food_data: any;
  recommendedItems: any = [];
  specialItems: any = [];


  constructor(public storage: Storage,private activatedRoute: ActivatedRoute, public restaurantAPI: RestaurantDetailsService,
    public router: Router, public menuApi: GetFoodMenuService) {
    console.log('home page: isLoggedIn', this.storage.get('isLoggedIn'));
    this.storage.get('isLoggedIn').then((val) => {
      this.isLoggedIn = val;
    });
  }

  ngOnInit(){
    this.passed_id = this.activatedRoute.snapshot.paramMap.get('r_id');


    this.restaurantAPI.getRestaurant(this.passed_id).subscribe((data: {}) => {
      this.RestaurantData = data;
   
    this.name = this.RestaurantData[0].RName;
    this.address = this.RestaurantData[0].RAddress;
    this.cuisine = this.RestaurantData[0].RCuisine;
    //this.rate = this.RestaurantData[0].RRating;
    this.img = this.RestaurantData[0].RImg;
    this.rating = this.RestaurantData[0].RRating;
    this.id = this.RestaurantData[0].RId;
    });

    this.menuApi.getMenuItems(parseInt(this.passed_id)).subscribe((data: {}) => {
      this.food_data = data;
      
      console.log('food data', this.food_data, (this.food_data).length);
      let i:number = 0;
      let j:number = 0;
      for(let eachItem of this.food_data){
        if(eachItem.FRating >= 4.3){
          this.recommendedItems[i] = eachItem;
          i++;
        }
        if(eachItem.chefsSpecial == true){
          this.specialItems[j] = eachItem;
          j++;
        }
      }
      console.log('recommended:', this.recommendedItems);
      console.log('chefs special', this.specialItems);

    });

    
  }

  async gotoRestEdit(){
    this.router.navigate(['rest-info-edit', this.id]);
  }

  async goToMenu(){
    this.router.navigate(['food-menu-edit', this.id]);
  }

}
