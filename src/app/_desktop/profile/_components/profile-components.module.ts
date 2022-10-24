import { NgModule } from '@angular/core';
import { ProfileResumeComponent } from './profile-resume/profile-resume.component';
import { ProfileAvatarComponent } from './profile-avatar/profile-avatar.component';
import { UserIdentityComponent } from './user-identity/user-identity.component';
import { UserFavoriteIndicatorsComponent } from './user-favorite-indicators/user-favorite-indicators.component';
import { SharedModule } from '../../_shared/shared.module';



@NgModule({
  declarations: [
    ProfileAvatarComponent,
    ProfileResumeComponent,
    UserIdentityComponent,
    UserFavoriteIndicatorsComponent
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    ProfileAvatarComponent,
    ProfileResumeComponent,
    UserIdentityComponent,
    UserFavoriteIndicatorsComponent
  ]
})
export class ProfileComponentsModule { }
