import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ActionSheetController } from '@ionic/angular';
import { Events } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { APIBackendService } from '../service/apibackend.service';
import { RestaurantinfoService } from '../service/restaurantinfo.service';
import { BookinginfoService } from '../service/bookinginfo.service';
import { LoginAPIService } from '../service/login-api.service';
import { Router } from '@angular/router';
import { Time } from 'highcharts';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-booktable',
  templateUrl: './booktable.page.html',
  styleUrls: ['./booktable.page.scss'],
})
export class BooktablePage implements OnInit {

  single = [];
  isChartLoaded = false;

  view: any[] = [700, 400];
  passed_id: string;
  RestaurantData: any;
  name: any;
  addre: any;
  cuisine: any;
  img: any;
  rId: any;
  bookingId: any;
  tables: any;
  myDate: any;
  date: Date;
  time: Time;
  myTime: any;
  tempDate: Date = new Date();
  today: any;
  dd: any;
  mm: any;
  yyyy: any;
  cd: any;
  cm: any;
  futDate: any;


  public isLoggedIn: boolean = false;
  public userName: string = '';
  public userEmail: string = '';
  public userId: any;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(private storage: Storage, public events: Events, private activatedRoute: ActivatedRoute,
    public restaurantAPI: RestaurantinfoService, public api: APIBackendService,
    public bookingAPI: BookinginfoService, public router: Router,
    public userLoginApi: LoginAPIService, public datePipe: DatePipe) {
    events.subscribe('user:created', () => {
      this.userId = this.userLoginApi.getUserId();
      this.userEmail = this.userLoginApi.getEmail();
    });



  }
  public userdata = { CId: this.userId };

  ngOnInit() {
    this.today = new Date();
    this.dd = this.today.getDate();
    this.mm = this.today.getMonth() + 1;
    this.yyyy = this.today.getFullYear();
    if (this.dd < 10) {
      this.dd = '0' + this.dd;
    }

    if (this.mm < 10) {
      this.mm = '0' + this.mm;
    }
    this.today = this.yyyy + '-' + this.mm + '-' + this.dd;
    console.log(this.today, typeof (this.today));
    //////////////////////////////////////////////////////////////////
    var someDate = new Date();
    var numberOfDaysToAdd = 7;
    someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
    this.cd = someDate.getDate();
    this.cm = someDate.getMonth() + 1;
    if (this.cd < 10) {
      this.cd = '0' + this.cd;
    }

    if (this.cm < 10) {
      this.cm = '0' + this.cm;
    }
    var y = someDate.getFullYear();
    this.futDate = y + '-' + this.cm + '-' + this.cd;
    console.log(this.futDate);


    this.userId = this.userLoginApi.getUserId();
    this.userEmail = this.userLoginApi.getEmail();
    this.isLoggedIn = this.userLoginApi.getIsloggedIn();
    this.passed_id = this.activatedRoute.snapshot.paramMap.get('r_id');
    this.restaurantAPI.getRestaurant(this.passed_id).subscribe((data: {}) => {
      this.RestaurantData = data;
      this.name = this.RestaurantData[0].RName;
      this.addre = this.RestaurantData[0].RAddress;
      this.cuisine = this.RestaurantData[0].RCuisine;
      this.img = this.RestaurantData[0].RImg;
      this.rId = this.RestaurantData[0].RId;
      this.restaurantAPI.getTable(this.passed_id).subscribe((data: {}) => {
        this.tables = data;

        for (let eachTable of this.tables) {
          let oneTable = {
            "name": eachTable.name,
            "value": eachTable.TId
          };

          this.single.push(oneTable);
        }

        this.isChartLoaded = true;

      });
    });

  }


  change(datePicker) {
    datePicker.open();
  }

  onSelect(event) {
    if (this.userLoginApi.getIsloggedIn() == true && typeof (this.myDate) == 'string') {
      this.date = new Date(this.myDate);
      this.time = new Time(this.myTime);

      console.log('myDate', this.myDate);
      console.log('myTime', this.myTime);
      this.userId = this.userLoginApi.getUserId();
      this.bookingAPI.create_a_booking_session({ CId: this.userId, restId: this.rId, tId: event.value }).subscribe((data: {}) => {
        this.bookingId = data;
        console.log('booking id', this.bookingId);
        this.bookingAPI.create_a_session({ SId: this.bookingId.id, TId: event.value, date: this.myDate, time: this.myTime }).subscribe((data: {}) => {
          console.log('inside create sess');

        });

      });

      this.bookingAPI.setTableId(event.value);

      this.router.navigate(['foodmenu', this.rId]);

    }
    else {
      window.alert("Please enter Date/Time")
    }
    if (this.userLoginApi.getIsloggedIn() == false) {
      console.log(this.myDate);
      console.log(this.myTime);
      window.alert("Please Log in to book")
    }


  }



}
