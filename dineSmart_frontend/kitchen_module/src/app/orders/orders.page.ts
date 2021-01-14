import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Events } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ModalController } from '@ionic/angular';
import { OrdersService } from '../service/orders.service';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {

  public restaurantName: string = '';
  public restaurantAddress: string = '';
  public allRestaurantData: any;
  searchRest: string;
  public RestData: any;
  public RestNameId: any = [];
  public currentDD: any;

  passed_id: string;
  reviewData: any;
  prepData: any;
  readData: any;
  inputRating = 0;
  public isLoggedIn: boolean = false;
  public userName: string = '';
  public userEmail: string = '';
  public newReviewData: any = { restId: "", restReview: "", userRating: this.inputRating, userId: "" };
  public onClickSubmit: boolean = true;
  public thisUser: boolean = false;

  

  constructor(public modalController: ModalController,
    private router: Router, public restaurantAPI: OrdersService,
    private storage: Storage, public events: Events)
    {
      
    }


  ngOnInit() {

    this.restaurantAPI.getAllReviewsByRId().subscribe((data: {}) => {
      this.reviewData = data;
      console.log('review data',this.reviewData);
      

    });

    this.restaurantAPI.getPrep().subscribe((data: {}) => {
      this.prepData = data;
      console.log('prep data',this.reviewData);
      

    });
    this.restaurantAPI.getRead().subscribe((data: {}) => {
      this.readData = data;
      //console.log(this.reviewData);
      

    });
  }
   
  pending()
    {
      console.log("Pending Orders");
      this.router.navigate(['/pending']);

    }
  
  prepared()
  {
    console.log("Food Prepared");
    this.router.navigate(['/prepared']);
  }
  ready()
  {
    console.log("Food Ready");
    this.router.navigate(['/ready']);
  }
  home()
  {
    console.log("Food Served");
    this.router.navigate(['/served']);
  }
}
