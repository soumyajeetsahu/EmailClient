import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  rootUrl: string ="https://api.angular-email.com/auth"
  constructor(private http: HttpClient) {}

  ValidateUserName(username: string) {
    return this.http.post<any>(`${this.rootUrl}/username`, {
      username,
    });
  }

  signup(signUpForm: any) {
    console.log(signUpForm);
    return this.http.post<any>(
      `${this.rootUrl}/signup`,
      signUpForm
    );
  }
}
