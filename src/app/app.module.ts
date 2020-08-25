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
import { HttpClientModule } from '@angular/common/http';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { FlightViewComponent } from './flight-view/flight-view.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';


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
    UserdashboardComponent,
    ThankYouComponent,
    AdminDashboardComponent,
    FlightViewComponent,
    AdminloginComponent
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
