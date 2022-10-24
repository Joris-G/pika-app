import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DateTimePipe } from '../../_shared/_pipes/dates';
import { ApplicationStateService } from '../../_services/_app/application-state.service';
import { ErrorHandlingService } from 'src/app/_services/error-handling.service';
import { SocketConnectionService } from 'src/app/_services/socket-connection.service';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from 'src/app/_services/auth.interceptor';
import { SharedComponentsModule } from './_components/shared.components.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    DateTimePipe,
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedComponentsModule,
  ],
  exports: [
    CommonModule,
    DateTimePipe,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    SharedComponentsModule,
  ],
  providers: [
    ErrorHandlingService,
    AuthInterceptor,
    DatePipe,
    SocketConnectionService,
    ApplicationStateService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ]
})
export class SharedModule { }
