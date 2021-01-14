import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { APIBackendService } from '../service/apibackend.service';
import { RestaurantinfoService } from '../service/restaurantinfo.service';
import {FoodinfoService} from '../service/foodinfo.service';
import { Time, each } from 'highcharts';


@Component({
  selector: 'app-restaurant-expand',
  templateUrl: './restaurant-expand.page.html',
  styleUrls: ['./restaurant-expand.page.scss'],
})
export class RestaurantExpandPage implements OnInit {


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
  rate: any;
  closingTime: any;
  openingTime: any;
  currentDate: Date = new Date();
  currentTime: any;
  restOpen: boolean = false;
  food_data: any;
  recommendedItems: any = [];
  specialItems: any = [];



  constructor(public router: Router, private activatedRoute: ActivatedRoute, public api: APIBackendService, 
    public restaurantAPI: RestaurantinfoService, public menuApi: FoodinfoService) { 

    this.currentTime = new Date().getHours() + ':' + new Date().getMinutes() + ':'+  new Date().getSeconds();
    
  }



  ngOnInit() {

    this.passed_id = this.activatedRoute.snapshot.paramMap.get('r_id');


    this.restaurantAPI.getRestaurant(this.passed_id).subscribe((data: {}) => {
      this.RestaurantData = data;
      console.log(this.RestaurantData[0]);
      this.name = this.RestaurantData[0].RName;
      this.address = this.RestaurantData[0].RAddress;
      this.cuisine = this.RestaurantData[0].RCuisine;
      //this.rate = this.RestaurantData[0].RRating;
      this.img = this.RestaurantData[0].RImg;
      this.rating = this.RestaurantData[0].RRating;
      this.id = this.RestaurantData[0].RId;
      this.openingTime = this.RestaurantData[0].ROpeningTime;
      this.closingTime = this.RestaurantData[0].RClosingTime;



      console.log('current Time:',this.currentTime, typeof(this.currentTime),Date.parse('20 Aug 2000 '+this.currentTime));
      console.log('opening time:', this.RestaurantData[0].ROpeningTime, 
        typeof(this.RestaurantData[0].ROpeningTime), Date.parse('20 Aug 2000 '+this.RestaurantData[0].ROpeningTime));
      console.log('closing time:', this.RestaurantData[0].RClosingTime, 
        typeof(this.RestaurantData[0].RClosingTime), Date.parse('20 Aug 2000 '+this.RestaurantData[0].RClosingTime));

      if(Date.parse('20 Aug 2000 '+this.currentTime) >= Date.parse('20 Aug 2000 '+this.RestaurantData[0].ROpeningTime) && 
      Date.parse('20 Aug 2000 '+this.currentTime) <= Date.parse('20 Aug 2000 '+this.RestaurantData[0].RClosingTime)){
        console.log('restaurant open!');
        this.restOpen = true;
      }
      else{
        console.log('restaurant closed!');

      }

    });

    this.menuApi.getFood(this.passed_id).subscribe((data: {}) => {
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

  



  goToMenu() {
    this.router.navigate(['foodmenu', this.passed_id]);
    
  }
  
  booktable(){
    this.router.navigate(['booktable',this.passed_id]);
  }

  viewReviews(){
    this.router.navigate(['rest-reviews-and-ratings', this.passed_id]);
  }

  testFunction(){
    
    console.log('Date:',this.currentDate, typeof(this.currentDate));
    this.currentTime = new Date().getHours() + ':' + new Date().getMinutes() + ':'+  new Date().getSeconds();
    console.log('current Time:',this.currentTime, typeof(this.currentTime),Date.parse('20 Aug 2000 '+this.currentTime));
    console.log('closing time:', this.RestaurantData[0].RClosingTime, 
      typeof(this.RestaurantData[0].RClosingTime), Date.parse('20 Aug 2000 '+this.RestaurantData[0].RClosingTime));

    if(Date.parse('20 Aug 2000 '+this.currentTime) <= Date.parse('20 Aug 2000 '+this.RestaurantData[0].RClosingTime)){
      console.log('restaurant open');
    }
    else{
      console.log('restaurant closed');
    }
  
  }



}
