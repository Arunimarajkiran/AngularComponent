import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { SearchParameters } from "./SearchParameters";

@Component({
  selector: 'app-search-flight1',
  templateUrl: './search-flight1.component.html',
  styleUrls: ['./search-flight1.component.css']
})
export class SearchFlight1Component {
  data: any;
  sp: SearchParameters=new SearchParameters;
  
  constructor(private service: ServiceService,private router: Router) { }

  getFlights(){
    this.service.fetchflights(this.sp).subscribe(
      data=>{
        this.data=data;
      }
    );
  }
  selectFlight(d:any) {
        //  this.data.getFlights.
        alert(d.flightNumber);
       let numberOfPassengers =this.sp.numberOfPassengers;
        //let customerName = data.name;
        //let obj = {id : customerId, name : customerName};
       sessionStorage.setItem('numberOfPassengers', String(numberOfPassengers));
       sessionStorage.setItem('cabinType',this.sp.cabinSelected);
     //  sessionStorage.setItem('flightNumber',this.data[1]);
       sessionStorage.setItem('selectedflight',JSON.stringify(d));
        
    //this.router.navigate(['booking']);
    this.router.navigate(['booking']); 
      
    }
  }


