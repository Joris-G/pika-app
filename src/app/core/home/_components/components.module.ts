import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProcessService } from '../../_services/process.service';
import { ProcessesComponent } from './processes/_processes/processes.component';
import { CreateProcessComponent } from './processes/create-process/create-process.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
  ],
  declarations: [
    ProcessesComponent,
    CreateProcessComponent
  ],
  exports: [

  ],
  providers: [
    ProcessService
  ]
})
export class ComponentsModule { }
