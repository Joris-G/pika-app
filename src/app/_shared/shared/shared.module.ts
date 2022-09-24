import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ErrorHandlingService } from '../_services/error-handling.service';
import { HeaderComponent } from '../_components/_header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DateTimePipe } from '../_pipes/dates';
import { SocketConnectionService } from '../_services/socket-connection.service';
import { LogoutButtonComponent } from '../_components/logout-button/logout-button.component';
import { ApplicationStateService } from '../_services/_app/application-state.service';



@NgModule({
  declarations: [
    HeaderComponent,
    DateTimePipe,
    LogoutButtonComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    HeaderComponent,
    DateTimePipe,
    LogoutButtonComponent
  ],
  providers: [
    ErrorHandlingService,
    DatePipe,
    SocketConnectionService,
    ApplicationStateService,
  ]
})
export class SharedModule { }
