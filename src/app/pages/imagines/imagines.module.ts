import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImaginesPageRoutingModule } from './imagines-routing.module';

import { ImaginesPage } from './imagines.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImaginesPageRoutingModule
  ],
  declarations: [ImaginesPage]
})
export class ImaginesPageModule {}
