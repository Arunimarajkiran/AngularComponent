import { Component, OnInit } from '@angular/core';
import { User } from "../User";
import { NgForm } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit {

  user=new User;
  status: any;
 
  constructor(private service :ServiceService) { }

  ngOnInit(): void {
  }

  addAFlight(form :NgForm){
  this.service.addAFlight(this.user).subscribe(
    data=>{
      this.status=data;
    }
  )
  form.reset();
  }
}
