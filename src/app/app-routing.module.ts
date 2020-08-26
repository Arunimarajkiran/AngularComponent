import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { PlanComponent } from "./plan/plan.component";
import { ClassesComponent } from "./classes/classes.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { DiscoverComponent } from "./discover/discover.component";
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { FlightViewComponent } from './flight-view/flight-view.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { DeleteFlightComponent } from './delete-flight/delete-flight.component';
import { UpdateFlightComponent } from './update-flight/update-flight.component';
import { SearchFlight1Component } from './search-flight1/search-flight1.component';
import { BookingComponent } from './booking/booking.component';
import { SeatBookingComponent } from './seat-booking/seat-booking.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {
    path: '',component:HomeComponent
  },
  {
    path:'homelink',component:HomeComponent
  },
  {
    path:'plan&booklink',component:PlanComponent
  },
  {
    path:'classeslink',component:ClassesComponent
  },
  {
    path:'discoverlink',component:DiscoverComponent
  },
  {
    path:'registerlink',component:RegisterComponent
  },
  {
    path:'loginlink',component:LoginComponent
  },
  {
    path:'dashboardlink',component:UserdashboardComponent
  },
  {
    path:'thankyoulink',component:ThankYouComponent
  },
  {
    path:'admindashboard',component:AdminDashboardComponent
  },
  {

    path:'adminloginlink',component:AdminloginComponent
  },
  {
    path:'flightview',component:FlightViewComponent
  },
  {
    path:'addflightlink',component:AddFlightComponent
  },
  {
    path:'deleteflightlink',component:DeleteFlightComponent
  },
  {
    path:'updateflightlink',component:UpdateFlightComponent
  },
  {
    path:'searchflightlink',component:SearchFlight1Component
  },
  {
    path:'booking',component: BookingComponent
  },
  {
    path: 'seat', component: SeatBookingComponent
  },
  {
    path: 'payment',component:PaymentComponent
  }
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
