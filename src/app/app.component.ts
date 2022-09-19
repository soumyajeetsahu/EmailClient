import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  signedIn = false;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.signedIn.subscribe((signin) => (this.signedIn = signin));
    this.authService.authenticateUser().subscribe();
    
  }
}
