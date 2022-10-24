import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil-button',
  templateUrl: './profil-button.component.html',
  styleUrls: ['./profil-button.component.scss'],
})
export class ProfilButtonComponent implements OnInit {
  public username: string = 'Joris GRANGIER';
  constructor() { }

  ngOnInit() { }

}
