import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FoodmenuPage } from './foodmenu.page';
import {SharedComponentsModule} from './../shared-components.module'

const routes: Routes = [
  {
    path: '',
    component: FoodmenuPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedComponentsModule
  ],
  declarations: [FoodmenuPage]
})
export class FoodmenuPageModule {}
