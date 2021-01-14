import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetFoodMenuService } from '../Services/get-food-menu.service';
import { InfoEditService } from '../Services/info-edit.service';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-edit-menu-item',
  templateUrl: './edit-menu-item.page.html',
  styleUrls: ['./edit-menu-item.page.scss'],
})
export class EditMenuItemPage implements OnInit {

  menuItemIndexInfoAsObj: any;
  menuItemIndexInfoAsString: any;
  itemData: any;
  newItemData = {RId:'', ItemID:'', Rate:'', Ingredients: '', Name: '', chefsSpecial: false, itemType:''};
  //newItemData: any;
  rName: any;
  rId: any;
  itemId: any;
  itemName: any;
  itemPrice: any;
  itemIngredients: any;
  itemImageAddress: any;
  isChefsSpecial: boolean = false;
  menuItemType: any;

  constructor(private activatedRoute: ActivatedRoute, private getMenuItemByIdApi: GetFoodMenuService, 
    private router: Router, public infoEditService: InfoEditService, public alertController: AlertController,
     public toastController: ToastController) { }

  ngOnInit() {
    this.menuItemIndexInfoAsString = this.activatedRoute.snapshot.paramMap.get('menuItemIndexInfoAsString');
    console.log('menuItemString',this.menuItemIndexInfoAsString);
    this.menuItemIndexInfoAsObj = JSON.parse(this.menuItemIndexInfoAsString);
    console.log('menuItemObj',this.menuItemIndexInfoAsObj);

    this.getMenuItemByIdApi.getMenuItemById(this.menuItemIndexInfoAsString).subscribe((data: {}) => {
      this.itemData = data[0];
      //this.newItemData = data[0];
      //this.menuSize = this.menuData.length();
      console.log('EditMenuItemPage - itemData:', this.itemData);
      this.rName = data[0].RName;
      this.rId = data[0].RId;
      this.itemId = data[0].ItemID;
      this.itemName = this.itemData.Name;
      this.itemPrice = this.itemData.Rate;
      this.itemIngredients = this.itemData.Ingredients;
      this.itemImageAddress = data[0].FImageAddress;
      this.isChefsSpecial = data[0].chefsSpecial;
    })
  }

  saveChanges(){
    this.newItemData.RId = this.rId;
    this.newItemData.ItemID = this.itemId;
    this.newItemData.Name = this.itemName;
    this.newItemData.Rate = this.itemPrice;
    this.newItemData.Ingredients = this.itemIngredients;
    this.newItemData.chefsSpecial = this.isChefsSpecial;
    this.newItemData.itemType = this.menuItemType;
    console.log('newItemData', this.newItemData);

    this.infoEditService.editItemData(this.newItemData).subscribe((data: {}) => {
      
      this.router.navigate(['/food-menu-edit', this.rId]);

    });
  }

  goToHome(){
    this.router.navigate(['/home', this.rId]);
  }

  


}
