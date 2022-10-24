import { NgModule } from '@angular/core';
import { SharedModule } from './_shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePage } from './home/home';

@NgModule({
  declarations: [AppComponent, HomePage],
  imports: [
    SharedModule,
    AppRoutingModule,
  ]
})
export class AppDesktopModule {

}
