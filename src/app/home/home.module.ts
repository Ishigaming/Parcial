import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ApiService } from '../api.service';
import { HttpClientModule } from '@angular/common/http';
import { ShopComponent } from '../shop/shop.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HttpClientModule
  ],
  declarations: [HomePage, ShopComponent],

  providers: [ApiService]
})
export class HomePageModule {}
