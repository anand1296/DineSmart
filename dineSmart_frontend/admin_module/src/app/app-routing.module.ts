import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home/:r_id', loadChildren: './home/home.module#HomePageModule' },
  // { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'rest-info-edit/:r_id', loadChildren: './rest-info-edit/rest-info-edit.module#RestInfoEditPageModule' },
  { path: 'food-menu-edit/:r_id', loadChildren: './food-menu-edit/food-menu-edit.module#FoodMenuEditPageModule' },
  { path: 'edit-menu-item/:menuItemIndexInfoAsString', loadChildren: './edit-menu-item/edit-menu-item.module#EditMenuItemPageModule' },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
