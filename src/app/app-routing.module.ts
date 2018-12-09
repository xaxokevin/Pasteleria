import { AuthGuard } from './guards/auth.guard';
import { Page404Component } from './components/page404/page404.component';
import { LoginComponent } from './components/login/login.component';
import { AddDulceComponent } from './components/add-dulce/add-dulce.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [

  
  {path: '', component: HomeComponent},
  {path:'add-dulce', component: AddDulceComponent, canActivate: [AuthGuard]},
  {path: 'user/login', component: LoginComponent},
  {path: 'user/register', component: RegisterComponent},
  {path: '**', component: Page404Component}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
