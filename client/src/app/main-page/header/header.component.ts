import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CheckMobileService } from 'src/app/shared/services/check-mobile/check-mobile.service';
import { AuthenticationService } from 'src/app/shared/services/authentication/authentication.service';
import { User } from 'src/app/models/user-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() isOpenNav: EventEmitter<boolean> = new EventEmitter();
  @Output() openRegister: EventEmitter<any> = new EventEmitter();
  public isOpenBurger: boolean;
  public isMobile: boolean;
  public user: User;

  constructor(
    private MobileService: CheckMobileService,
    private authService: AuthenticationService,
    private router: Router
  ) {
    this.isOpenBurger = false;
  }

  ngOnInit() {
    this.isMobile = this.MobileService.screenIsMobile();
    this.authService.getUser().subscribe(user => {
      this.user = user;
    });
  }

  toggleMenu(): void {
    this.isOpenBurger = !this.isOpenBurger;
    this.isOpenNav.emit(this.isOpenBurger);
  }

  openRegisterDialog() {
    this.openRegister.emit();
  }

  logout() {
    this.user = null;
    this.authService.logout().subscribe(() => this.router.navigate(['/']));
  }

}
