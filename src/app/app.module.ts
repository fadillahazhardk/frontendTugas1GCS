import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './components/signin/signin.component';
import { RegisterComponent } from './components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { EditpageComponent } from './components/editpage/editpage.component';
import { HttpClientModule } from '@angular/common/http';
import { UserServiceService } from './service/user-service.service';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    RegisterComponent,
    MainpageComponent,
    EditpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
