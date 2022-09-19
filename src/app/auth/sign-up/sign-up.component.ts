import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { MatchPassword } from '../validators/match-password';
import { ValidateUserName } from '../validators/validate-user-name';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { SignupSuccessDialogComponent } from './signup-success-dialog/signup-success-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  authForm: FormGroup = new FormGroup(
    {
      username: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.pattern(/^[a-z09]+$/),
        ],
        [this.validateUserName.validate]
      ),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
      ]),
      passwordConfirmation: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
      ]),
    },
    { validators: [this.matchPassword.validate] }
  );

  constructor(
    private matchPassword: MatchPassword,
    private validateUserName: ValidateUserName,
    private authservice: AuthService,
    private snackbar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {}

  OnFormSubmit(form: any) {
    if (this.authForm.invalid) {
      return;
    }

    this.authservice.signup(this.authForm.value).subscribe({
      next: (res) => {
        this.snackbar.openFromComponent(SignupSuccessDialogComponent, {
          duration: 5 * 1000,
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
        this.authForm.reset();
        form.resetForm();
        // this.router.navigateByUrl('/inbox')
      },
      error: (err) => {
        if (!err.staus) {
          this.authForm.setErrors({ UnknwonError: true });
        }
      },
    });
  }
}
