import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { RegisterComponent } from './register/register.component';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [
    UserComponent,
    RegisterComponent,
    IndexComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
