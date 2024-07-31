import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { HighchartsChartModule } from 'highcharts-angular';
import { BarchartComponent } from './barchart/barchart.component';
import { RegionComponent } from './region/region.component';
import { TimeComponent } from './time/time.component';
import { ProductComponent } from './product/product.component';
import { MapComponent } from './map/map.component';
import { HttpClientModule } from '@angular/common/http';
import { MapserviceService } from './mapservice.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BarchartComponent,
    RegionComponent,
    TimeComponent,
    ProductComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    HighchartsChartModule,
    HttpClientModule
  ],
  providers: [MapserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
