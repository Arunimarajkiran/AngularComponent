import { Time } from '@angular/common';

export class User{
    firstName:string;
    lastName:string;
    email:string;
    password:string;  
    dateOfBirth:string;
    mobileNumber:string;
    departuretime:Time;
    arrivaltime:Time;
    source:String;
    destination:String;
    seatcapacity:Number;
    flightId:Number;
}