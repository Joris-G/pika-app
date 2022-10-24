import { NgModule } from '@angular/core';
import { SharedModule } from '../_desktop/_shared/shared.module';
import { AppMobileRoutingModule } from './appMobile-routing.module';
import { AppMobileComponent } from './appMobile.component';

@NgModule({
  declarations: [
    AppMobileComponent
  ],
  imports: [
    SharedModule,
    AppMobileRoutingModule
  ]
})
export class AppMobileModule {
}
