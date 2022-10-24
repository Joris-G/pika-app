import { ApplicationRef, DoBootstrap, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';


import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { SharedModule } from './_desktop/_shared/shared.module';
import { IonicRouteStrategy } from '@ionic/angular';
import { ApplicationStateService } from './_services/_app/application-state.service';
import { AppMobileComponent } from './_mobile/appMobile.component';
import { AppComponent } from './_desktop/app.component';
import { AppDesktopModule } from './_desktop/app.desktop.module';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };
@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppDesktopModule,
    SharedModule,
    SocketIoModule.forRoot(config),
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ApplicationStateService
  ],
  // exports: [SharedModule]
  // bootstrap: [AppComponent, AppMobileComponent],
})
export class AppModule implements DoBootstrap {
  constructor(
    private appStateService: ApplicationStateService
  ) { }

  ngDoBootstrap(appRef: ApplicationRef) {
    const APP_COMPONENT = (this.appStateService.getIsMobileResolution()) ? AppMobileComponent : AppComponent;
    appRef.bootstrap(APP_COMPONENT, document.getElementById('app'));
  }

}
