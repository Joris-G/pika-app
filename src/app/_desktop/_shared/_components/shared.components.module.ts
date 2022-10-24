import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '../../_components/_header/header.component';
import { LogoutButtonComponent } from '../../_components/_header/logout-button/logout-button.component';
import { NavButtonComponent } from '../../_components/_header/nav-button/nav-button.component';
import { ProfilButtonComponent } from '../../_components/_header/profil-button/profil-button.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent,
    NavButtonComponent,
    ProfilButtonComponent,
    LogoutButtonComponent
  ],
  exports: [
    HeaderComponent,
    NavButtonComponent
  ]
})
export class SharedComponentsModule { }
