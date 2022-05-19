import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImaginesPage } from './imagines.page';

const routes: Routes = [
  {
    path: '',
    component: ImaginesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImaginesPageRoutingModule {}
