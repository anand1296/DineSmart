import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { APIBackendService } from '../service/apibackend.service';
import { RestaurantreviewsService } from '../service/restaurantreviews.service';

import { LoginAPIService } from '../service/login-api.service';
import { Storage } from '@ionic/storage';
import { Events } from '@ionic/angular';


@Component({
  selector: 'app-rest-reviews-and-ratings',
  templateUrl: './rest-reviews-and-ratings.page.html',
  styleUrls: ['./rest-reviews-and-ratings.page.scss'],
})

export class RestReviewsAndRatingsPage implements OnInit{

  passed_id: string;
  reviewData: any;
  inputRating = 0;
  public isLoggedIn: boolean = false;
  public userName: string = '';
  public userEmail: string = '';
  public newReviewData: any = { restId: "", restReview: "", userRating: this.inputRating, userId: "" };
  public onClickSubmit: boolean;
  public thisUser: boolean = false;



  constructor(public router: Router, private activatedRoute: ActivatedRoute, public api: APIBackendService, public restReviewService: RestaurantreviewsService,
    public events: Events, private storage: Storage, public userLoginApi: LoginAPIService) {

      this.onClickSubmit = true;

    events.subscribe('user:created', () => {
      // user and time are the same arguments passed in `events.publish(user, time)`
      this.isLoggedIn = this.userLoginApi.getIsloggedIn();
      console.log('inside constructor: isLoggedIn', this.isLoggedIn);
      this.userName = this.userLoginApi.getName();
      this.userEmail = this.userLoginApi.getEmail();
      this.newReviewData.userId = this.userLoginApi.getUserId();
    });
    
    console.log('inside constructor: isLoggedIn', this.isLoggedIn);
    console.log('inside constructor: onClickSubmit', this.onClickSubmit);
    console.log('inside constructor: userName', this.userLoginApi.getName());
    console.log('inside constructor: userId', this.userLoginApi.getUserId());
    console.log('inside constructor: userId', this.newReviewData.userId);
  

  }



  rateUp() {
    if (this.inputRating != 5)
      this.inputRating++;
  }

  rateDown() {
    if (this.inputRating != 0)
      this.inputRating--;
  }



  submitReview() {

    this.userName = this.userLoginApi.getName();
    this.userEmail = this.userLoginApi.getEmail();
    this.newReviewData.userId = this.userLoginApi.getUserId();
    this.newReviewData.userRating = this.inputRating;
    console.log('newReviewData', this.newReviewData);

    this.restReviewService.createReview(this.newReviewData).subscribe();
    this.onClickSubmit = false;
    // if(this.newReviewData.userId = this.passed_id)
    //   this.thisUser = true;

  }

  // reEdit(){
  //   this.onClickSubmit = false;
  // }



  ngOnInit() {


    //this.onClickSubmit = true;
    // this.events.subscribe('user:created', () => {
    //   // user and time are the same arguments passed in `events.publish(user, time)`
    //   this.storage.get('isLoggedIn').then((val) => {
    //     this.isLoggedIn = val;
    //     this.storage.get('name').then((userval) => {
    //       this.userName = userval;
    //     });
    //     console.log('inside constructor: "isLoggedIn"',this.storage.get('isLoggedIn'));
    //     console.log('inside constructor: isLoggedIn',this.isLoggedIn);
    //     console.log('inside constructor: onClickSubmit',this.onClickSubmit);

    //     this.storage.get('email').then((emailval) => {
    //       this.userEmail = emailval;
    //     });
    //     this.storage.get('userId').then((idval) => {
    //         this.newReviewData.userId = idval;
    //     });
    //     console.log('inside constructor: userid',this.newReviewData.userId);
        
    //   });
    // });

    // console.log('inside constructor: "isLoggedIn"',this.storage.get('isLoggedIn'));
    // console.log('inside constructor: isLoggedIn',this.isLoggedIn);
    // console.log('inside constructor: onClickSubmit',this.onClickSubmit);
    // console.log('inside constructor: userId',this.newReviewData.userId);
  

    this.passed_id = this.activatedRoute.snapshot.paramMap.get('r_id');

    this.restReviewService.getAllReviewsByRId(this.passed_id).subscribe((data: {}) => {
      this.reviewData = data;
      //console.log(this.reviewData);
      this.newReviewData.restId = this.passed_id;

    });



  }






}
