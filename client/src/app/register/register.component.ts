import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { CheckMobileService } from '../shared/services/check-mobile/check-mobile.service';
import { RegisterService } from './register.service';
import { SnackBarService } from '../shared/services/snack-bar/snack-bar.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [RegisterService]
})
export class RegisterComponent implements OnInit {
  userEmail;
  userPassword;
  userConfirmPassword;
  userAdminToken;
  hasResult = false;
  isSuccess = null;
  userForm: FormGroup;

  requiredFieldMessage = '* This field must not be null';
  emailFieldMessage = '* Must be a valid email address';
  minLengthFieldMessage = '* Must be larger than 6 characters';
  maxLengthFieldMessage = '* Must be less than 60 characters';

  registerSuccessMessage = 'Registered Successfully!';
  registerFailMessage = 'There is an error. Try again later!';

  constructor(
    private fb: FormBuilder,
    private matRef: MatDialogRef<RegisterComponent>,
    private isMobile: CheckMobileService,
    private registerService: RegisterService,
  ) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.maxLength(60)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      passwordConfirmation: ['', [Validators.required, Validators.minLength(6)]],
      adminToken: ''
    });
    this.userEmail = this.userForm.controls.email;
    this.userPassword = this.userForm.controls.password;
    this.userConfirmPassword = this.userForm.controls.passwordConfirmation;
    this.userAdminToken = this.userForm.controls.adminToken;
    this.matRef.updatePosition({
      top: '50px',
    });
    this.matRef.updateSize( this.isMobile.screenIsMobile() ? '300px' : '450px');
  }

  onSubmit() {
    if (this.hasResult && this.isSuccess) {
      this.matRef.close();
    } else {
      this.registerService.registerUser(this.userForm.value).subscribe((res: any) => {
        this.hasResult = true;
        this.isSuccess = res.success;
        this.registerFailMessage = res.message || this.registerFailMessage;
      });
    }
  }

}
