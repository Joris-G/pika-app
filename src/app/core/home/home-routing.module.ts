import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../_services/auth.guard';
import { HomePage } from './home.page';
import { ProcessesComponent } from './_components/processes/_processes/processes.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'processes',
        component: ProcessesComponent
      },
      // {
      //   path: 'tools',
      //   component: ProcessesComponent
      // }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
