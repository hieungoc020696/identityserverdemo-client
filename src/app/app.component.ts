import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'IdentityServerDemoClient';
  isLogged = false;
  constructor(public authService: AuthService) {
    this.isLogged = this.authService.isLoggedIn();
  }

  login() {
    this.authService.startAuthentication();
  }
}
