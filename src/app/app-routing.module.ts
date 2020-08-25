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
  }
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
