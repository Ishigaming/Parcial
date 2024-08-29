import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsPageRoutingModule } from './details-routing.module';

import { DetailsPage } from './details.page';
import { HttpBackend, HttpClientModule } from '@angular/common/http';
import { ApiService } from '../api.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsPageRoutingModule,
    HttpClientModule
  ],
  declarations: [DetailsPage],
  providers: [ApiService]
})
export class DetailsPageModule {}
