import { AfterContentChecked, Component, ViewChild } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
import { RegisterService } from './register.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements AfterContentChecked {
  @ViewChild('swiper') swiper: SwiperComponent;
  constructor(
    private registerService: RegisterService,
  ) {
    this.registerService.registerSuccess$.subscribe({
      next: (isRegister: boolean) => {
        if (isRegister) { this.swiper.swiperRef.slidePrev(); }
      }
    }
    );
  }
  ngAfterContentChecked(): void {
    if (this.swiper) {
      this.swiper.updateSwiper({});
    }
  }



  onSwiper() {
    // console.log('onswiper');
  }
  onSlideChange() {
    console.log('slide change');
  }


}
