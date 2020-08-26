import { Component, OnInit } from '@angular/core';
import { FlightParameters } from "./FlightParameters";
import { Router } from "@angular/router";
import { ServiceService } from "../service.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  data: any;
  sp: FlightParameters =new FlightParameters();

  constructor(private service: ServiceService,private router: Router) { }

  searchFlights(){
    this.service.fetchflights(this.sp).subscribe(
      data=>{
        this.data=data; 
      }
    );
    this.router.navigate(['flightview']);
  }
}

