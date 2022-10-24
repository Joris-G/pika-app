import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserFavoriteIndicatorsComponent } from './user-favorite-indicators.component';

describe('UserFavoriteIndicatorsComponent', () => {
  let component: UserFavoriteIndicatorsComponent;
  let fixture: ComponentFixture<UserFavoriteIndicatorsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFavoriteIndicatorsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserFavoriteIndicatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
