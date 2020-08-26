import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { passengerClass } from "../booking/booking.component";
import { SeatDetails } from "./SeatsAvailable"; 
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-seat-booking',
  templateUrl: './seat-booking.component.html',
  styleUrls: ['./seat-booking.component.css']
})
export class SeatBookingComponent implements OnInit {

 
  tempid: any;
  fare:number=0;
  totalFare:number=0;
  constructor(private service : ServiceService) { }
  selected: boolean = false;
  selectSeats = new Array<number>();
  selectedSeatNumber:string;
  seatdetails:SeatDetails=new SeatDetails();
  
  
  selectseat(pl: any) {

    this.tempid = pl;
    var s;
    var id = document.getElementById(pl)

    var result=this.findIndex(pl);
   
     if(result>=0)
    {
      this.selectSeats.splice(result,1);
      document.getElementById(pl).style.backgroundColor = "rgb(211, 183, 183)";
      // var x = document.getElementById(pl);
      // x.setAttribute("src", "../assets/bookseat.png");
      if(this.selectSeats.length==0)
      {
        this.fare=0;
        this.totalFare=this.fare;
      }
      else{
      this.fare=this.fare-Number(sessionStorage.getItem('initialEconomyfare'));
      this.totalFare=this.fare;
      }
    }
    else{
      console.log("else callled");
      
      if(this.selectSeats.length==0)
      {
      this.fare=Number(sessionStorage.getItem('initialEconomyfare'));
      this.totalFare=this.fare;
      }
      this.selectSeats.push(pl);
      this.myFunction(pl);
      this.fare=Number(sessionStorage.getItem('initialEconomyfare'))*this.selectSeats.length;
      this.totalFare=this.fare;
      
    }
    
    this.selectedSeatNumber=String(this.selectSeats.sort().toString().split(","));
    

}
   

myFunction(pl) {
  console.log(pl+" inside func");
  document.getElementById(pl).style.backgroundColor = "yellow";
}
    findIndex(id1)
    {
      
      for(let i=0;i<this.selectSeats.length;i++){
        
        if (id1 == this.selectSeats[i]) {
          return i;
        }
        
    }
    return -1;
    }
  
    changeSeatColor(seatNo) {
      console.log("called")
      var x = document.getElementById(seatNo);
      console.log(x);
      x.setAttribute("src", "../assets/bseat.png");
      var element = <HTMLInputElement> document.getElementById(seatNo);
      
      element.disabled = true;
      
    }

  
    key = new Array<number>();
   ngOnInit(): void {
    this.seatdetails.flightId=Number(sessionStorage.getItem('flightId'));
    this.seatdetails.dateOfJourney=String(sessionStorage.getItem('dateOfJourney'));
    console.log(this.seatdetails);
    this.service.fetchAvailableSeats(this.seatdetails).subscribe(data=>{
      this.key=data.fetchAvailableSeats;
      console.log(data)
      console.log(this.key)
      for(let i=0;i<this.key.length;i++){
        console.log("for loop")
        this.changeSeatColor(this.key[i]);
      }
        console.log("after lop")
    })
   
  }
}
