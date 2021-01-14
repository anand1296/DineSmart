import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {GetFoodMenuService} from '../Services/get-food-menu.service';
import { AlertController, ToastController } from '@ionic/angular';
import { InfoEditService } from '../Services/info-edit.service';

@Component({
  selector: 'app-food-menu-edit',
  templateUrl: './food-menu-edit.page.html',
  styleUrls: ['./food-menu-edit.page.scss'],
})
export class FoodMenuEditPage implements OnInit {

  passed_id: string;
  menuData: any;

  editOn: boolean = false;
  addItemOn: boolean = false;

  menuSize: number;
  newMenuData = {restId:'', itemId: 0, itemName:'', itemPrice:'', itemIngredients:'', isChefsSpecial: false, itemType:''};
  newMenuItemName: any;
  newMenuItemPrice: any;
  menuItemIndexInfoAsObj = {restId:'', itemId: ''};
  tempId: number = 120;
  rName: any;
  rId: any;
  itemId: any;
  itemName: any;
  itemPrice: any;
  itemIngredients: any;
  itemImage: any;
  isChefsSpecial: boolean = false;
  menuItemType: any;


  constructor(private activatedRoute: ActivatedRoute, private getMenuApi: GetFoodMenuService, 
    private router: Router, private alertController: AlertController, private infoEditService: InfoEditService, 
    public toastController: ToastController) {

   }

  ngOnInit() {
    this.passed_id = this.activatedRoute.snapshot.paramMap.get('r_id');
    this.getMenuApi.getMenuItems(parseInt(this.passed_id)).subscribe((data: {}) => {
      this.menuData = data;
      //this.newMenuData = data;
      this.rName = this.menuData[0].RName;
      this.rId = this.menuData[0].RId;
      //this.menuSize = this.menuData.length();
      console.log('FoodMenuEditPage - menuData:', this.menuData);
    })
  }

  

  goToAddMenuItem(){
    this.addItemOn = true;
  }

  

  performAddItem(){
    this.newMenuData.restId = this.rId;
    let length = Object.keys(this.menuData).length;
    console.log('length of menuData', length);
    //this.tempId = this.menuData[(length)-1].ItemID;
 
    this.newMenuData.itemId = this.tempId++;
    this.newMenuData.restId = this.rId;
    this.newMenuData.itemName = this.itemName;
    this.newMenuData.itemIngredients = this.itemIngredients;
    this.newMenuData.itemPrice = this.itemPrice;
    this.newMenuData.isChefsSpecial = this.isChefsSpecial;
    this.newMenuData.itemType = this.menuItemType;
    console.log('itemId of new menuData', this.newMenuData);

    this.infoEditService.addNewMenuItem(this.newMenuData).subscribe((data: {}) => {

      this.addItemOn = false;
      this.ngOnInit();
      this.presentToast('Item added successfully!');
      
    });


  }

  dismissAdd(){
    this.addItemOn = false;
  }


  editMenuItem(menuItemDetails: any){
    console.log('menuItemDetails:',menuItemDetails);
    this.menuItemIndexInfoAsObj.itemId = menuItemDetails.ItemID;
    this.menuItemIndexInfoAsObj.restId = menuItemDetails.RId;
    let menuItemIndexInfoAsString = JSON.stringify(this.menuItemIndexInfoAsObj);
    this.router.navigate(['edit-menu-item', menuItemIndexInfoAsString]);
  }

  async deleteItem(menuItemDetails: any) {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      subHeader: 'Are you sure you want to delete the Menu item?',
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
            this.removeMenuItem(menuItemDetails);
          }
          
        }]
      
    });
    await alert.present();
  }

  removeMenuItem(menuItemDetails: any){
    this.menuItemIndexInfoAsObj.itemId = menuItemDetails.ItemID;
    this.menuItemIndexInfoAsObj.restId = menuItemDetails.RId;
    //let menuItemIndexInfoAsString = JSON.stringify(this.menuItemIndexInfoAsObj);
    this.infoEditService.removeMenuItem(this.menuItemIndexInfoAsObj).subscribe((data: {}) => {

      this.ngOnInit();
      this.presentToast('Item deleted successfully!');
      // this.router.navigate(['/food-menu-edit', menuItemDetails.RId]);

    });
    
  }

  async presentToast(text){
    const toast = await this.toastController.create({
      message: text,
      position: 'bottom',
      duration: 3000
    });
    toast.present();
  
  }

  goToHome(){
    this.router.navigate(['/home', this.rId]);
  }

}
