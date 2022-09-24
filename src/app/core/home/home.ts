import { Component, OnInit, ViewChild } from '@angular/core';
import { IonMenu, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.html',
  styleUrls: ['home.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('homeMenu') homeMenu: IonMenu;
  constructor(
    private navCtrl: NavController
  ) { }
  ngOnInit(): void {

  }
  ionViewDidEnter() {
    // this.homeMenu.setOpen(true, false);
  }

  nav(path: string) {
    console.log('nav');
    // this.navCtrl.setTopOutlet().navigateForward(path);
  }

}
