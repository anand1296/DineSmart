import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Events } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ModalController } from '@ionic/angular';
import { EditinfoService } from '../service/editinfo.service';
import { LoginAPIService } from '../service/login-api.service';
import { Time } from 'highcharts';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-editinfo',
  templateUrl: './editinfo.page.html',
  styleUrls: ['./editinfo.page.scss'],
})
export class EditinfoPage implements OnInit {
  public isLoggedIn: boolean = false;
  public userName: string = '';
  public userEmail: string = '';
  public userPhone: any;
  public userId: any;
  public userDob: any;
  public doB: any;
  dd: any;
  mm: any;
  yyyy: any;
  cd: any;

  public userData = { email: '', password: '' };

  public registerdata = { email: "", opassword: "", npassword: "" };

  constructor(public modalController: ModalController,
    private router: Router, public registerAPI: EditinfoService,
    private storage: Storage, public events: Events, public loginAPI: LoginAPIService)
    {
      events.subscribe('user:created', () => {
        // user and time are the same arguments passed in `events.publish(user, time)`
        if (this.loginAPI.getIsloggedIn() == true) {
          this.isLoggedIn = this.loginAPI.getIsloggedIn();
          this.userName = this.loginAPI.getName();
          console.log('header: isLoggedIn', this.isLoggedIn);
          this.userEmail = this.loginAPI.getEmail();
          //this.doB = this.loginAPI.getDoB();
          this.userPhone = this.loginAPI.getPhone();

          this.doB = new Date(this.loginAPI.getDoB());
          this.dd = this.doB.getDate();
          this.mm = this.doB.getMonth() + 1;
          this.yyyy = this.doB.getFullYear();
          if (this.dd < 10) {
            this.dd = '0' + this.dd;
          }

          if (this.mm < 10) {
            this.mm = '0' + this.mm;
          }
          
          this.userDob = this.yyyy + '-' + this.mm + '-' + this.dd;
          console.log('userDob', this.userDob);
         
        }
  
      });
    }

  ngOnInit() {
    if (this.loginAPI.getIsloggedIn() == true) {
      this.isLoggedIn = this.loginAPI.getIsloggedIn();
      this.userName = this.loginAPI.getName();
      console.log('header: isLoggedIn', this.isLoggedIn);
      this.userEmail = this.loginAPI.getEmail();
      this.userId = this.loginAPI.getUserId();
      this.doB = this.loginAPI.getDoB();
      this.userPhone = this.loginAPI.getPhone();


    
    this.dd = this.doB.getDate();
    this.mm = this.doB.getMonth() + 1;
    this.yyyy = this.doB.getFullYear();
    if (this.dd < 10) {
      this.dd = '0' + this.dd;
    }

    if (this.mm < 10) {
      this.mm = '0' + this.mm;
    }
    
    this.userDob = this.yyyy + '-' + this.mm + '-' + this.dd;
    console.log('userDob', this.userDob);

    //this.userDob = this.doB;

    }
  }
  
  Register() {
    this.registerAPI.createotp(this.registerdata).subscribe((data: {}) => {
      this.storage.set('userId', data['id']);
      this.storage.set('email', data['email']);
      this.storage.set('opassword', data['opassword']);
      this.storage.set('npassword', data['npassword']);
    //  this.storage.set('isLoggedIn', true);
      
      this.router.navigate(['/home']);

    });
  }

 
}
