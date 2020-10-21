import { CallApiComponent } from './call-api/call-api.component';
import { SigninOidcComponent } from './signin-oidc/signin-oidc.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SilentRefreshComponent } from './silent-refresh/silent-refresh.component';

const routes: Routes = [
  {
    path: 'signin-oidc',
    component: SigninOidcComponent,
  },
  {
    path: 'silent-refresh',
    component: SilentRefreshComponent,
  },
  {
    path: 'call-api',
    component: CallApiComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
