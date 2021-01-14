import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import { HighchartsChartModule } from 'highcharts-angular';

import { IonicModule } from '@ionic/angular';

import { BooktablePage } from './booktable.page';

const routes: Routes = [
  {
    path: '',
    component: BooktablePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    NgxChartsModule,
    HighchartsChartModule
  ],
  declarations: [BooktablePage]
})
export class BooktablePageModule {}
