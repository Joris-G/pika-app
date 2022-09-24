import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/_shared/shared/shared.module';
import { CreateOperationComponent } from './create-operation/create-operation.component';
import { CreateProcessComponent } from './create-process/create-process.component';
import { CreateSubOperationComponent } from './create-sub-operation/create-sub-operation.component';
import { OperationsToolbarComponent } from './operations-toolbar/operations-toolbar.component';
import { ProcessDetailsComponent } from './process-details/process-details.component';
import { ProcessHeaderToolbarComponent } from './process-header-toolbar/process-header-toolbar.component';
import { ProcessHeaderComponent } from './process-header/process-header.component';
import { ProcessListComponent } from './process-list/process-list.component';
import { ProcessOperationComponent } from './process-operation/process-operation.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule,
    SharedModule,
  ],
  declarations: [
    CreateProcessComponent,
    ProcessListComponent,
    ProcessDetailsComponent,
    ProcessOperationComponent,
    OperationsToolbarComponent,
    CreateOperationComponent,
    CreateSubOperationComponent,
    ProcessHeaderComponent,
    ProcessHeaderToolbarComponent
  ],
  exports: [
    ProcessListComponent,
    ProcessDetailsComponent,
    ProcessOperationComponent,
    CreateOperationComponent,
    CreateSubOperationComponent,
    ProcessHeaderComponent,
    ProcessHeaderToolbarComponent
  ]
})
export class ProcessComponentsModule { }
