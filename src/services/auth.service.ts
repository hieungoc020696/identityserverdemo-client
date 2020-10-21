import { Injectable } from '@angular/core';

import { UserManager, UserManagerSettings, User } from 'oidc-client';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private manager = new UserManager(getClientSettings());
  private user: User = null;

  constructor() {
    this.manager.getUser().then((user) => {
      this.user = user;
    });
  }

  isLoggedIn(): boolean {
    return this.user != null && !this.user.expired;
  }

  getClaims(): any {
    return this.user.profile;
  }

  getAuthorizationHeaderValue(): string {
    return `${this.user.token_type} ${this.user.access_token}`;
  }

  startAuthentication(): Promise<void> {
    return this.manager.signinRedirect();
  }

  completeAuthentication(): Promise<void> {
    return this.manager.signinRedirectCallback().then((user) => {
      console.log(user);
      this.user = user;
    });
  }
  refresh() {
    this.manager.signinSilentCallback().then((user) => {
      console.log('user', user);
    });
  }
}

export function getClientSettings(): UserManagerSettings {
  return {
    authority: 'http://localhost:5001/',
    client_id: 'learner',
    redirect_uri: 'http://localhost:4200/signin-oidc',
    post_logout_redirect_uri: 'http://localhost:4200/',
    response_type: 'code',
    scope: 'openid profile api',
    filterProtocolClaims: true,
    loadUserInfo: true,
    client_secret: 'learner',
  };
}
