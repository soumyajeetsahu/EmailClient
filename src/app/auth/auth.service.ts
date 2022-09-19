import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  rootUrl: string = 'https://api.angular-email.com/auth';
  signedIn = new BehaviorSubject(false);

  constructor(private http: HttpClient) {}

  ValidateUserName(username: string) {
    return this.http.post<any>(`${this.rootUrl}/username`, {
      username,
    });
  }

  signup(signUpForm: any) {
    return this.http.post<any>(`${this.rootUrl}/signup`, signUpForm).pipe(
      tap(() => {
        this.signedIn.next(true);
      })
    );
  }

  authenticateUser() {
    return this.http
      .get<any>(`${this.rootUrl}/signedin`, { withCredentials: true })
      .pipe(tap((res) => this.signedIn.next(res.autenticated)));
  }

  signOut() {
    return this.http.post(`${this.rootUrl}/signout`, {}).pipe(
      tap(() => {
        this.signedIn.next(false);
      })
    );
  }

  signIn(signinForm: any) {
    return this.http.post<any>(`${this.rootUrl}/signin`, signinForm).pipe(
      tap(() => {
        this.signedIn.next(true);
      })
    );
  }
}
