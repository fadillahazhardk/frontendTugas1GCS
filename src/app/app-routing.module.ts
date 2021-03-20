import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from "./components/signin/signin.component";
import { RegisterComponent } from "./components/register/register.component";
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { EditpageComponent } from './components/editpage/editpage.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'register'},
  {path: 'signin', component: SigninComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'mainpage/:id', component: MainpageComponent},
  {path: 'editpage', component: EditpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
