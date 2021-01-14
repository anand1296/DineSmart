import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RestaurantDetailsService } from '../Services/restaurant-details.service';
import {Storage} from '@ionic/storage';
import {AlertController, ToastController} from '@ionic/angular';
import {ActionSheetController} from '@ionic/angular';
import { PictureSourceType, CameraOptions, Camera } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { InfoEditService } from '../Services/info-edit.service';


const STORAGE_KEY = 'my_images';    //for image uploading functions

@Component({
  selector: 'app-rest-info-edit',
  templateUrl: './rest-info-edit.page.html',
  styleUrls: ['./rest-info-edit.page.scss'],
})
export class RestInfoEditPage implements OnInit {

  passed_id: string;
  RestaurantData: any;
  name: any;
  address: any;
  cuisine: any;
  img: any;
  rating: any;
  id: any;

  public newData = {rId: '', newName:'', newAddress: '', newCuisine: ''};
  //newImg: any;
  
  images = [];    //for image uploading functions

  constructor(public alertController: AlertController, public storage: Storage,private activatedRoute: ActivatedRoute, public restaurantAPI: RestaurantDetailsService,
    public router: Router, private actionSheetController: ActionSheetController, private camera: Camera,
      private file: File, private toastController: ToastController, private ref: ChangeDetectorRef,
        private webView: WebView, public infoEdit: InfoEditService) { 
          
          // this.newData.rId = this.id;
          // this.newData.newName = this.name;
          // this.newData.newAddress = this.address;
          // this.newData.newCuisine = this.cuisine;
        }

  ngOnInit() {
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

    this.newData.rId = this.id;
    this.newData.newName = this.name;
    this.newData.newAddress = this.address;
    this.newData.newCuisine = this.cuisine;

    });
  }

  async saveChanges() {
    
    console.log('saveChanges clicked:');
    console.log('newData.rId',this.newData.rId);
    console.log('newData.newName',this.newData.newName);
    console.log('newData.newAddress',this.newData.newAddress);
    console.log('newData.newCuisine',this.newData.newCuisine);

    const alert = await this.alertController.create({
      header: 'Save changes?',
      //subHeader: 'Are you sure you want to delete the Restaurant?',
      // message: 'This is an alert message.',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
           
          }
          
        }, {
          text: 'Yes',
          role: 'destructive',
          cssClass: 'secondary',
          handler: () => {
            this.reflectChanges();
          }
          
        }]
      
    });
    await alert.present();
  }

  reflectChanges(){
     this.infoEdit.editRestaurantInfo(this.newData).subscribe((data: {}) => {
      this.router.navigate(['/home',this.id]);

    });
  }


  async deleteRestaurant() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      subHeader: 'Are you sure you want to delete the Restaurant?',
      // message: 'This is an alert message.',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
           
          }
          
        }, {
          text: 'Yes',
          role: 'destructive',
          cssClass: 'secondary',
          handler: () => {
            this.removeRestaurant();
          }
          
        }]
      
    });
    await alert.present();
  }

  removeRestaurant(){
    this.storage.set('isLoggedIn', false);

    //this.router.navigate(['login']);
    this.infoEdit.removeRestaurant(this.newData).subscribe((data: {}) => {
      this.router.navigate(['login']);

    });
  }

///////////////////////////////////image bhaangad
async loadImage(){
  const actionSheet = await this.actionSheetController.create({
    header: "Select Image Source",
    buttons: [{
      text: 'Load from Gallery',
      handler: () => {
        this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
      }
    },
    {
      text: 'Use Camera',
      handler: () => {
        this.takePicture(this.camera.PictureSourceType.CAMERA);
      }
    },
    {
      text: 'Cancel',
      role: 'cancel'
    }
  ]
  });
  await actionSheet.present();
}


pathForImage(img){
  if(img == null){
    return '';
  } else{
    let converted = this.webView.convertFileSrc(img);
    return converted;
  }
}


async presentToast(text){
  const toast = await this.toastController.create({
    message: text,
    position: 'bottom',
    duration: 3000
  });
  toast.present();

}

takePicture(sourceType: PictureSourceType){
  var options: CameraOptions = {
    quality: 100,
    sourceType: sourceType,
    saveToPhotoAlbum: false,
    correctOrientation: true
  };

  this.camera.getPicture(options).then(imagePath => {
    var currentName = imagePath.substr(imagePath.lastIndexOf('/')+1);
    var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/')+1);
    this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
  })

}

copyFileToLocalDir(namePath, currentName, newFileName){
  this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(_=> {
    this.updateStoredImages(newFileName);
  }, error => {
    this.presentToast('Error while storing file.');
  });
}

updateStoredImages(name){
  this.storage.get(STORAGE_KEY).then(images => {
    let arr = JSON.parse(images);
    if(!arr){
      let newImages = [name];
      this.storage.set(STORAGE_KEY, JSON.stringify(newImages));
    } else{
      arr.push(name);
      this.storage.set(STORAGE_KEY, JSON.stringify(arr));
    }

    let filePath = this.file.dataDirectory + name;
    let resPath = this.pathForImage(filePath);

    let newEntry = {
      name: name,
      path: resPath,
      filePath: filePath
    };

    this.images = [newEntry, ...this.images];
    this.ref.detectChanges(); //trigger change detection cycle
  });
}

createFileName(){
  var d = new Date();
  var n = d.getTime();
  var newFileName = n + ".jpg";
  return newFileName;
}


goToHome(){
  this.router.navigate(['/home', this.id]);
}


}
