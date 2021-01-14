import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'orders', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'orders', loadChildren: './orders/orders.module#OrdersPageModule' },  { path: 'prepared', loadChildren: './prepared/prepared.module#PreparedPageModule' },
  { path: 'ready', loadChildren: './ready/ready.module#ReadyPageModule' },
  { path: 'pending', loadChildren: './pending/pending.module#PendingPageModule' },
  { path: 'served', loadChildren: './served/served.module#ServedPageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
