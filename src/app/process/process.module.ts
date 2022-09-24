import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProcessPageRoutingModule } from './process-routing.module';

import { ProcessPage } from './process.page';
import { SharedModule } from '../_shared/shared/shared.module';
import { ProcessComponentsModule } from './_components/processComponents.module';
import { ProcessService } from './_services/process.service';
import { OperationService } from './_services/operation.service';
import { SubOperationService } from './_services/sub-operation.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProcessPageRoutingModule,
    ProcessComponentsModule,
    SharedModule,
  ],
  declarations: [ProcessPage],
  providers: [
    ProcessService,
    OperationService,
    SubOperationService,

  ]
})
export class ProcessPageModule { }
