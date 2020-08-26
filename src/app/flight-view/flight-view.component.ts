import { Component, OnInit } from '@angular/core';
import { FlightParameters } from "../home/FlightParameters";
import { ServiceService } from "../service.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-flight-view',
  templateUrl: './flight-view.component.html',
  styleUrls: ['./flight-view.component.css']
})
export class FlightViewComponent implements OnInit{

  data: any;
  sp: FlightParameters =new FlightParameters();
  constructor(private service: ServiceService,private router: Router) { }

  ngOnInit() {
       let numberOfPassengers =this.sp.numberOfPassengers;
        //let customerName = data.name;
        //let obj = {id : customerId, name : customerName};
        
    this.sp.source=sessionStorage.getItem('source');
    this.sp.destination=sessionStorage.getItem('Destination')
       sessionStorage.setItem('numberOfPassengers', String(numberOfPassengers));
       sessionStorage.setItem('cabinType',this.sp.cabinSelected);
        sessionStorage.setItem('flightNumber',this.data[1]);
  }
    viewFlights(flightNumber:any, initialEconomyfare:any) {
      sessionStorage.setItem('flightNumber',flightNumber);
      sessionStorage.setItem('initialEconomyfare',initialEconomyfare);
      this.router.navigate(['booking']);   

    }
  }

  // sessionStorage.setItem('selectedflight',JSON.stringify(d.flightNumber));