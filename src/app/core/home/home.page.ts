import { Component, OnInit, ViewChild } from '@angular/core';
import { IonMenu } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('homeMenu') homeMenu: IonMenu;
  constructor() { }
  ngOnInit(): void {

  }
  ionViewDidEnter() {
    this.homeMenu.setOpen(true, false);
  }

}
