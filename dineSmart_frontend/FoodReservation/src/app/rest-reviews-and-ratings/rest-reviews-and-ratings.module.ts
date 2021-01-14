import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RestReviewsAndRatingsPage } from './rest-reviews-and-ratings.page';

const routes: Routes = [
  {
    path: '',
    component: RestReviewsAndRatingsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RestReviewsAndRatingsPage]
})
export class RestReviewsAndRatingsPageModule {}
