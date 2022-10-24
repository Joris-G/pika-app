import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/_interfaces/user.int';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user: IUser;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.user = this.authService.authUser;
  }

}
