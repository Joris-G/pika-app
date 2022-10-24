import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import { SharedModule } from '../_shared/shared.module';
import { SharedComponentsModule } from '../_shared/_components/shared.components.module';
import { ProfileComponentsModule } from './_components/profile-components.module';

@NgModule({

  imports: [
    SharedModule,
    SharedComponentsModule,
    ProfileComponentsModule,
    ProfilePageRoutingModule
  ],
  declarations: [
    ProfilePage,
  ]
})
export class ProfilePageModule { }
