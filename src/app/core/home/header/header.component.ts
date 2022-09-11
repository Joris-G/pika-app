import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { SocketService } from '../../_services/socket.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [
    SocketService
  ]
})
export class HeaderComponent implements OnInit {

  constructor(
    private socketService: SocketService,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.socketService.connection();
    this.socketService.listenConnection();
  }

  logoutClick() {
    this.authService.logout();
  }

}
