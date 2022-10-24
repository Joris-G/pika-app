import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProcessPageRoutingModule } from './process-routing.module';

import { ProcessPage } from './process.page';
import { OperationService } from 'src/app/_services/_process/operation.service';
import { ProcessService } from 'src/app/_services/_process/process.service';
import { SubOperationService } from 'src/app/_services/_process/sub-operation.service';
import { ProcessComponentsModule } from './_components/processComponents.module';
import { SharedComponentsModule } from '../_shared/_components/shared.components.module';
import { SharedModule } from 'src/app/_desktop/_shared/shared.module';

@NgModule({
  imports: [
    ProcessPageRoutingModule,
    ProcessComponentsModule,
    // SharedComponentsModule,
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
