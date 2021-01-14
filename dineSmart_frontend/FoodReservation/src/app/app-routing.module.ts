import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list/:passed_id',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'registration-page1', loadChildren: './registration-page1/registration-page1.module#RegistrationPage1PageModule' },
  { path: 'favpage', loadChildren: './favpage/favpage.module#FavpagePageModule' },
  { path: 'restaurant-expand/:r_id', loadChildren: './restaurant-expand/restaurant-expand.module#RestaurantExpandPageModule' },
  { path: 'foodmenu/:r_id', loadChildren: './foodmenu/foodmenu.module#FoodmenuPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'profile/:oid', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'booktable/:r_id', loadChildren: './booktable/booktable.module#BooktablePageModule' },
  { path: 'rest-reviews-and-ratings/:r_id', loadChildren: './rest-reviews-and-ratings/rest-reviews-and-ratings.module#RestReviewsAndRatingsPageModule' },
  { path: 'cart-page', loadChildren: './cart-page/cart-page.module#CartPagePageModule' },
  { path: 'orders', loadChildren: './orders/orders.module#OrdersPageModule' },
  { path: 'payment/:passed_id', loadChildren: './payment/payment.module#PaymentPageModule' },
  { path: 'wallet-payment/:passed_id', loadChildren: './wallet-payment/wallet-payment.module#WalletPaymentPageModule' },
  //{ path: 'editinfo', loadChildren: './editinfo/editinfo.module#EditinfoPageModule' }


  { path: 'editinfo', loadChildren: './editinfo/editinfo.module#EditinfoPageModule' },
  { path: 'exit-page/:passed_id', loadChildren: './exit-page/exit-page.module#ExitPagePageModule' }











];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
