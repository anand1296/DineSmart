import { Component, OnInit } from '@angular/core';
import {ActionSheetController, Events} from '@ionic/angular';
import {Storage} from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  public isLoggedIn: boolean = false;
  public managerName: string = '';

  constructor(public router: Router, public actionSheetController: ActionSheetController, public events: Events, public storage: Storage) { 

    events.subscribe('manager:loggedIn', () => {
      // user and time are the same arguments passed in `events.publish(user, time)`
      this.storage.get('isLoggedIn').then((val) => {
        this.isLoggedIn = val;
        console.log('header comp: "isLoggedIn"', this.storage.get('isLoggedIn'));
        console.log('header comp: isLoggedIn', this.isLoggedIn);
        this.storage.get('managerName').then((userval) => {
          this.managerName = userval;
        });
      });
    });
  }

  ngOnInit() {}

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      buttons: [
      {
        text: 'Logout',
        icon: 'share',
        role: 'destructive',
        handler: () => {
          this.logoutUser();
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
    this.storage.get('isLoggedIn').then((val) => {
      this.storage.remove('restId');
      this.storage.remove('managerName');
      this.storage.remove('isLoggedIn');

      this.isLoggedIn = false;
      this.managerName = '';
      
    });
    //this.events.publish('manger:loggedOut');
    this.router.navigate(['login']);
  }

  goToLogin(){
    this.router.navigate(['login']);
  }

}
