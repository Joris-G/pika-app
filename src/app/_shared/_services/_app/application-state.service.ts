import { Injectable } from '@angular/core';

@Injectable()
export class ApplicationStateService {

  private isMobileResolution: boolean;

  constructor() {
    console.log('hello');
    if (window.innerWidth < 768) {
      this.isMobileResolution = true;
      console.log('hello1');
    } else {
      this.isMobileResolution = false;
      console.log('hello2');
    }
  }

  public getIsMobileResolution(): boolean {
    return this.isMobileResolution;
  }
}
