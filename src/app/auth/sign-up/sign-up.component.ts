import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { MatchPassword } from '../validators/match-password';
import { ValidateUserName } from '../validators/validate-user-name';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
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
    private authservice: AuthService
  ) {}

  ngOnInit(): void {}

  OnFormSubmit() {
    if (this.authForm.invalid) {
      return;
    }

    this.authservice.signup(this.authForm.value).subscribe({
      next: (res) => {},
      error: (err) => {
        if (!err.staus) {
          this.authForm.setErrors({ UnknwonError: true });
        }
      },
    });
  }
}
