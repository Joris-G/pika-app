import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { ApplicationStateService } from '../../_services/_app/application-state.service';

import { ProcessPage } from './process.page';
import { ProcessDetailsComponent } from './_components/process-details/process-details.component';

const routes: Routes = [
  {
    path: '',
    component: ProcessPage,
    children: [
      {
        path: ':id',
        component: ProcessDetailsComponent,
      },
    ]
  }

];
const mobileRoutes: Routes = [
  {
    path: '',
    component: ProcessDetailsComponent,
    children: [
      {
        path: ':id',
        component: ProcessDetailsComponent,
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProcessPageRoutingModule {
  constructor(
    private router: Router,
    private appStateService: ApplicationStateService,
  ) {
    if (this.appStateService.getIsMobileResolution()) {
      console.log('change routes');
      this.router.resetConfig(mobileRoutes);
    }
  }
}
