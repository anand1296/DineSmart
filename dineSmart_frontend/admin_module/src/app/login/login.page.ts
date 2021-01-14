import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Events} from '@ionic/angular';
import {LoginApiService} from '../Services/login-api.service';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public managerData = { r_id: '', r_password: '' };
  public wrongCredentials: boolean = false;

  constructor(private router: Router, public loginApi: LoginApiService, 
    private storage: Storage, public events: Events) { 

    }



  async managerLogin(){
    if (this.managerData.r_id!='' && this.managerData.r_password!='') {
      console.log('r_id:',this.managerData.r_id,'r_password:',this.managerData.r_password);
      this.loginApi.authenticateManager(this.managerData).subscribe((data: {}) => {
      if (Object.entries(data).length != 0) {
        this.storage.set('restId', data[0].RId);
        this.storage.set('managerName', data[0].RManager);

        this.storage.set('isLoggedIn', true);
        console.log('isLoggedIn',this.storage.get('isLoggedIn'));
        this.events.publish('manager:loggedIn');       
        this.router.navigate(['/home', this.managerData.r_id]);
    
      }else{
        this.wrongCredentials = true;
      }
      });

    }
    else{
      this.wrongCredentials = true;
    }
  }
  

  ngOnInit() {
  }

}
