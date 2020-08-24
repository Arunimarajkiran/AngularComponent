import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from "./home/home.component";
import { PlanComponent } from './plan/plan.component';
import { ClassesComponent } from './classes/classes.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DiscoverComponent } from './discover/discover.component';
import { ServiceService } from './service.service';
import { PaymentComponent } from './payment/payment.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlanComponent,
    ClassesComponent,
    RegisterComponent,
    LoginComponent,
    DiscoverComponent,
    PaymentComponent,
    UserdashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
