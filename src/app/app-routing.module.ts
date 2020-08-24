import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { PlanComponent } from "./plan/plan.component";
import { ClassesComponent } from "./classes/classes.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { DiscoverComponent } from "./discover/discover.component";

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
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
