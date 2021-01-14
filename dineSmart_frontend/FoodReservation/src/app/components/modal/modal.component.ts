import { Component, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { APIBackendService } from '../../service/apibackend.service';
import { EmailValidator } from '@angular/forms';
import { LoginAPIService } from '../../service/login-api.service';
import { Events } from '@ionic/angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {


  // "value" passed in componentProps
  @Input() value: number;

  public userData = { email: '', password: '' };
  public wrongCredentials: boolean = false;
  //public userName: string;
  constructor(navParams: NavParams, private modalController: ModalController, private router: Router, public api: LoginAPIService, private storage: Storage, public events: Events) {
    // componentProps can also be accessed at construction time using NavParams
  }

  async userLogin() {
    if (this.userData.email != '' && this.userData.password != '') {
      console.log('email:', this.userData.email, 'password:', this.userData.password);
      this.api.authenticateUser(this.userData).subscribe((data: {}) => {
        if (Object.entries(data).length != 0) {
          console.log('userData', data);
          this.api.setUserData(data[0].CId, data[0].CEmail, data[0].CName, data[0].CDoB, data[0].CPhone);
          this.storage.set('userId', data[0].CId);
          this.storage.set('email', data[0].CEmail);
          this.storage.set('name', data[0].CName);

          this.storage.set('isLoggedIn', true);

          this.modalController.dismiss();
          this.events.publish('user:created');

          this.router.navigate(['/home']);

        } else {
          this.wrongCredentials = true;
        }
      });

    } else {
      this.wrongCredentials = true;
    }

  }

  closeModal1() {
    this.modalController.dismiss();
  }

  gotoRegister1() {
    this.modalController.dismiss();
    this.router.navigate(['registration-page1']);
  }



  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalComponent,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }

}
