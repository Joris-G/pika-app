import { NgModule } from '@angular/core';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { SwiperModule } from 'swiper/angular';
import { RegisterService } from '../../../_services/register.service';
import { SharedModule } from 'src/app/_desktop/_shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    LoginPageRoutingModule,
    SwiperModule
  ],
  declarations: [
    LoginFormComponent,
    LoginPage,
    RegisterFormComponent,
  ],
  providers: [
    RegisterService
  ]
})
export class LoginPageModule { }
