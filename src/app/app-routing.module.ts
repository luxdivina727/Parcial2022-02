import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'create',
    loadChildren: () => import('./pages/create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('./pages/detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'update/:id',
    loadChildren: () => import('./pages/update/update.module').then( m => m.UpdatePageModule)
  },
  {
    path: 'singers',
    loadChildren: () => import('./pages/singers/singers.module').then( m => m.SingersPageModule)
  },
  {
    path: 'recording',
    loadChildren: () => import('./pages/recording/recording.module').then( m => m.RecordingPageModule)
  },
  {
    path: 'recording-update/:id',
    loadChildren: () => import('./pages/recording-update/recording-update.module').then( m => m.RecordingUpdatePageModule)
  },
  {
    path: 'recording-create',
    loadChildren: () => import('./pages/recording-create/recording-create.module').then( m => m.RecordingCreatePageModule)
  },
  {
    path: 'recording-detail/:id',
    loadChildren: () => import('./pages/recording-detail/recording-detail.module').then( m => m.RecordingDetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
