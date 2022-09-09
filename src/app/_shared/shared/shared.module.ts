import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorHandlingService } from '../_services/error-handling.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    ErrorHandlingService
  ]
})
export class SharedModule { }
