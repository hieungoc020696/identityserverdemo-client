import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninOidcComponent } from './signin-oidc/signin-oidc.component';
import { SilentRefreshComponent } from './silent-refresh/silent-refresh.component';
import { HttpClientModule } from '@angular/common/http';
import { CallApiComponent } from './call-api/call-api.component';

@NgModule({
  declarations: [AppComponent, SigninOidcComponent, SilentRefreshComponent, CallApiComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
