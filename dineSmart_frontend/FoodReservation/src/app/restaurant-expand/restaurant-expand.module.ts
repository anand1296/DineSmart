import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RestaurantExpandPage } from './restaurant-expand.page';
import { SharedComponentsModule } from '../shared-components.module';

const routes: Routes = [
  {
    path: '',
    component: RestaurantExpandPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    
  ],
  declarations: [RestaurantExpandPage]
})
export class RestaurantExpandPageModule {}
