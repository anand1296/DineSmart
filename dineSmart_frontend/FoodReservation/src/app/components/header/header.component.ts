import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../modal/modal.component';
import { LoginAPIService } from '../../service/login-api.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { Events } from '@ionic/angular';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isLoggedIn: boolean = false;
  public userName: string = '';
  public userEmail: string = '';
  public userData = { email: '', password: '' };

  constructor(public modalController: ModalController, private storage: Storage,private router: Router,
    public actionSheetController: ActionSheetController, public events: Events, public loginAPI: LoginAPIService) {
    events.subscribe('user:created', () => {
      // user and time are the same arguments passed in `events.publish(user, time)`
      if (this.loginAPI.getIsloggedIn() == true) {
        this.isLoggedIn = this.loginAPI.getIsloggedIn();
        this.userName = this.loginAPI.getName();
        console.log('header: isLoggedIn', this.isLoggedIn);
        this.userEmail = this.loginAPI.getEmail();
      }

    });





  }

  ngOnInit() {
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalComponent,
      componentProps: { value: 123 },
      backdropDismiss: true
    });
    return await modal.present();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      buttons: [{
        text: 'Cart',
        icon: 'trash',
        handler: () => {

        }
      }, {
        text: 'Logout',
        icon: 'share',
        role: 'destructive',
        handler: () => {
          this.logoutUser();
        }
      }, {
        text: 'Profile',
        icon: 'person',
        handler: () => {
          this.router.navigate(['/editinfo']);
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {

        }
      }]
    });
    await actionSheet.present();
  }

  public logoutUser() {
    this.loginAPI.clearUserData();
    this.isLoggedIn = false;
    console.log('user logged out: isLggedIn', this.isLoggedIn);
    this.userName = '';
    this.userEmail = '';
  }

}
