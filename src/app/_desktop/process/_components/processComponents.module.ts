import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/_desktop/_shared/shared.module';
import { CreateOperationComponent } from './create-operation/create-operation.component';
import { CreateProcessComponent } from './create-process/create-process.component';
import { CreateSubOperationComponent } from './create-sub-operation/create-sub-operation.component';
import { OperationsToolbarComponent } from './operations-toolbar/operations-toolbar.component';
import { ProcessDetailsComponent } from './process-details/process-details.component';
import { ProcessHeaderToolbarComponent } from './process-header-toolbar/process-header-toolbar.component';
import { ProcessHeaderComponent } from './process-header/process-header.component';
import { ProcessListComponent } from './process-list/process-list.component';
import { ProcessOperationComponent } from './process-operation/process-operation.component';
import { ProcessSideBarComponent } from './process-side-bar/process-side-bar.component';
import { SearchProcessComponent } from './search-process/search-process.component';

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
    ProcessHeaderToolbarComponent,
    ProcessSideBarComponent,
    SearchProcessComponent,

  ],
  exports: [
    ProcessListComponent,
    ProcessDetailsComponent,
    ProcessOperationComponent,
    CreateOperationComponent,
    CreateSubOperationComponent,
    ProcessHeaderComponent,
    ProcessHeaderToolbarComponent,
    ProcessSideBarComponent,
    SearchProcessComponent,

  ]
})
export class ProcessComponentsModule { }
