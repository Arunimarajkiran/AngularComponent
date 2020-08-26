import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  numberOfPassengers: Number;
  flightNumber: String;
  d: any;
  kuchbi: String;
  Np: number[] = [];
  url: string = '/seatselection';
  constructor(private router: Router) {

    this.d = JSON.parse(sessionStorage.getItem('selectedflight'));



    //this.flightNumber= String(sessionStorage.getItem('flightNumber'));
    this.numberOfPassengers = Number(sessionStorage.getItem('numberOfPassengers'));
    for (let i = 1; i <= this.numberOfPassengers; i++) {
      this.Np.push(i);
      this.passengerList[i] = new passengerClass();
    }
  }

  passengerList: passengerClass[] = [];

  passenger() {
    //  this.data.getFlights.
    // alert(this.passengerList[2].name);
    sessionStorage.setItem('pl', JSON.stringify(this.passengerList));

    //this.router.navigate(['booking']);
    this.router.navigate(['seat']);
  }

  ngOnInit(): void {

  }



}
export class passengerClass {
  name: String;
  age: Number;
  /*constructor(name: string, age:Number) 
     {     this.name=name;
            this.age=age;
     }
 */
}
