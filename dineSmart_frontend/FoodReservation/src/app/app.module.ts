import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ModalComponent } from './components/modal/modal.component';

import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IonicStorageModule } from '@ionic/storage';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RestpageComponent } from './restpage/restpage.component';
import { FooditemslistComponent } from './fooditemslist/fooditemslist.component';
import { RestaurantExpandPageModule } from './restaurant-expand/restaurant-expand.module'
import { FoodmenuPageModule } from './foodmenu/foodmenu.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HighchartsChartModule } from 'highcharts-angular';
import { ChartModule } from 'angular2-highcharts';
import {RestReviewsAndRatingsPageModule} from './rest-reviews-and-ratings/rest-reviews-and-ratings.module';
import {DatePipe} from '@angular/common';



const appRoutes: Routes = [
  {
    path: 'home.page',
    component: HomePage
  }
]

@NgModule({
  declarations: [AppComponent, ModalComponent, HeaderComponent, FooterComponent, RestpageComponent ],
  entryComponents: [ModalComponent],
  imports: [
    BrowserModule,
    //RouterModule.forRoot(appRoutes),
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    IonicStorageModule.forRoot(),
    RestaurantExpandPageModule,
    FoodmenuPageModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    HighchartsChartModule,
    RestReviewsAndRatingsPageModule
    
    

    //RestpageComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DatePipe,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }


