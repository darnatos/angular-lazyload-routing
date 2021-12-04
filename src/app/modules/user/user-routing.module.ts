import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user.component';

const routes: Routes = [{
  path: '', component: UserComponent, children: [
    {path: '', pathMatch: 'full', redirectTo:'index'},
    {path: 'index', component: IndexComponent},
    {path: 'register', component: RegisterComponent},
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
