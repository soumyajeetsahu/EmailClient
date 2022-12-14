import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignOutComponent } from './sign-out/sign-out.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  { path: 'signup', component: SignUpComponent },
  { path: 'signout', component: SignOutComponent },
  { path: '', component: SigninComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
