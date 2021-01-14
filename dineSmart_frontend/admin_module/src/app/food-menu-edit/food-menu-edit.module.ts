import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FoodMenuEditPage } from './food-menu-edit.page';

const routes: Routes = [
  {
    path: '',
    component: FoodMenuEditPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FoodMenuEditPage]
})
export class FoodMenuEditPageModule {}
