import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckMobileService {
  private isMobile: boolean;
  constructor() {
    this.isMobile = window.innerWidth < 600 ? true : false;
  }

  screenIsMobile(): boolean {
    return this.isMobile;
  }
}
