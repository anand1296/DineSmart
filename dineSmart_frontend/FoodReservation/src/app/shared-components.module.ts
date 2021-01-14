import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooditemslistComponent } from './fooditemslist/fooditemslist.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [FooditemslistComponent],
  imports: [
    CommonModule,
    IonicModule
  ],

exports: [
  FooditemslistComponent
]

})
export class SharedComponentsModule { }
