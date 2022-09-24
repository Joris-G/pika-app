import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../../core/_services/auth.service';
import { SocketService } from '../../../core/_services/socket.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [
    SocketService
  ]
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  constructor(
    private socketService: SocketService,
    private authService: AuthService,
  ) { }

  ngOnInit() {

  }

  logoutClick() {
    this.authService.logout();
  }

}
