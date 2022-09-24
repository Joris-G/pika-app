import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';



import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './_shared/shared/shared.module';
import { AuthInterceptor } from './core/_services/auth.interceptor';
import { HomePage } from './core/home/home';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { ApplicationStateService } from './_shared/_services/_app/application-state.service';
import { AppMobileComponent } from './_mobile/appMobile.component';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };
@NgModule({
  declarations: [AppComponent, HomePage, AppMobileComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    SocketIoModule.forRoot(config),
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    ApplicationStateService
  ],
  bootstrap: [AppComponent, AppMobileComponent],
})
export class AppModule { }
