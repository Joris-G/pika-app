import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/_services/auth.service';

@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
  styleUrls: ['./logout-button.component.scss'],
})
export class LogoutButtonComponent {

  constructor(private authService: AuthService) { }

  logoutClick() {
    this.authService.logout();
  }
}
