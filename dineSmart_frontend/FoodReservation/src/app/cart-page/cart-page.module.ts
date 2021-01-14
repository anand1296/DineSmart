import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CartPagePage } from './cart-page.page';
import { FormatTimePipe } from './cart-page.page';

const routes: Routes = [
  {
    path: '',
    component: CartPagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CartPagePage, FormatTimePipe]
})
export class CartPagePageModule { }
