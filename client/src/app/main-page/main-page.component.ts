import { Component, OnInit } from '@angular/core';
import { CheckMobileService } from '../shared/services/check-mobile/check-mobile.service';
import { MatDialog } from '@angular/material';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  private mobileNav: HTMLElement;
  private mainScreen: HTMLElement;
  private mainNav: HTMLElement;
  private mainContent: HTMLElement;
  private arrowIcon: HTMLElement;

  public displayMainNav: boolean;

  constructor(
    private isMobileService: CheckMobileService,
    private matDialog: MatDialog
  ) {}

  ngOnInit() {
    this.mobileNav = document.getElementById('mobileNav');
    this.mainScreen = document.getElementById('main');
    this.mainNav = document.getElementById('main-nav');
    this.mainContent = document.getElementById('main-content');
    this.arrowIcon = document.getElementById('arrow-icon');
    this.displayMainNav = !this.isMobileService.screenIsMobile();
  }

  toggleMobileNav($event: boolean) {
    if ($event) {
      this.openNav(this.mobileNav, this.mainScreen);
    } else {
      this.closeNav(this.mobileNav, this.mainScreen);
    }
  }

  toggleMainNav() {
    if (this.displayMainNav) {
      this.closeNav(this.mainNav, this.mainContent, 30);
    } else {
      this.openNav(this.mainNav, this.mainContent, window.innerWidth * 0.25);
    }
    this.displayMainNav = !this.displayMainNav;
  }

  openRegisterDialog() {
    this.matDialog.open(RegisterComponent);
  }

  openNav(nav: HTMLElement, screen: HTMLElement, width?: number) {
    nav.style.width = width >= 150 ? `${width}px` : `150px`;
    screen.style.marginLeft = width >= 150 ? `${width}px` : `150px`;
  }

  closeNav(nav: HTMLElement, screen: HTMLElement, width?: number) {
    nav.style.width = width > 0 ? `${width}px` : '0px';
    screen.style.marginLeft = width > 0 ? `${width}px` : '0px';
  }

}
