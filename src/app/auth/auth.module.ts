import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { SignupSuccessDialogComponent } from './sign-up/signup-success-dialog/signup-success-dialog.component';
import { SignOutComponent } from './sign-out/sign-out.component';


@NgModule({
  declarations: [
    SigninComponent,
    SignUpComponent,
    SignupSuccessDialogComponent,
    SignOutComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule
  ]
})
export class AuthModule { }
