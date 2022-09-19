import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  authForm: FormGroup = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(/^[a-z09]+$/),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ]),
  });

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  OnFormSubmit() {
    if (this.authForm.invalid) {
      return;
    }

    this.authService.signIn(this.authForm.value).subscribe({
      next: () => {
        this.router.navigateByUrl('/inbox')
      },
      error: (err) => {
        console.log(err.error)
        if (err.error.username || err.error.password) {
          this.authForm.setErrors({ Credentials: true });
        }
      },
    });
  }
}
