import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared/services/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hasResult = false;
  isSuccess = null;
  requiredFieldMessage = 'This field must not be null';
  emailFieldMessage = 'Must be a valid email address';
  authenFailMessage = 'Username or password is incorrect';
  loginForm: FormGroup;
  username;
  password;

  constructor(
    private fb: FormBuilder,
    private authenService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
    this.username = this.loginForm.controls.username;
    this.password = this.loginForm.controls.password;
  }

  onSubmit() {
    if (!this.loginForm.valid) {
      return;
    }
    this.authenService.login(this.loginForm.value).subscribe(isSuccess => {
      this.hasResult = true;
      if (isSuccess) {
        this.router.navigateByUrl('/');
      } else {
        this.isSuccess = false;
      }
    });
  }

}
