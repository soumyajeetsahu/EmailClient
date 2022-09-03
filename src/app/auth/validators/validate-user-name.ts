import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({ providedIn: 'root' })
export class ValidateUserName implements AsyncValidator {
  constructor(private authService: AuthService) {}
  validate = (control: AbstractControl): Observable<any | null> => {
    const { value } = control;

    return this.authService.ValidateUserName(value).pipe(
      map((value) => {
        if (value.available) {
          return null;
        } else {
          return value;
        }
      }),
      catchError((err) => {
        if (err.error.username) {
          return of({ invalidUsername: true });
        } else {
          return of({ ConnectionError: true });
        }
      })
    );
  };
}
