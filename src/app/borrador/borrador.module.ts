import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BorradorPageRoutingModule } from './borrador-routing.module';

import { BorradorPage } from './borrador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BorradorPageRoutingModule
  ],
  declarations: [BorradorPage]
})
export class BorradorPageModule {}
