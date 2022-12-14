import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeMobilePage } from './home-mobile/home-mobile.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomeMobilePage,
  },
  {
    path: 'admin',
    loadChildren: () => import('../core/admin/admin.module').then(m => m.AdminPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('../_shared/_pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppMobileRoutingModule { }
