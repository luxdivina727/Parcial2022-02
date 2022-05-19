import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecordingDetailPageRoutingModule } from './recording-detail-routing.module';

import { RecordingDetailPage } from './recording-detail.page';
import { Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: RecordingDetailPage
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecordingDetailPageRoutingModule
  ],
  declarations: [RecordingDetailPage]
})
export class RecordingDetailPageModule {}
