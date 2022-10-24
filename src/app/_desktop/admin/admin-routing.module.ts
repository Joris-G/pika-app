import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPage } from './admin.page';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '',
    component: AdminPage,
    children: [{
      path: 'users',
      component: UserComponent
    },
    {
      path: 'user',
      component: AdminPage
    }]
  },
];

@NgModule({
  declarations: [UserComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule { }
