import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { AppComponent } from './app.component';

import {NavbarComponent} from './component/navbar/navbar.component'
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
const appRoutes: Routes=[
  {path:'login',component: LoginComponent},
  {path:'signup',component: SignupComponent},
]
@NgModule({
  declarations: [
    AppComponent,
  NavbarComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
