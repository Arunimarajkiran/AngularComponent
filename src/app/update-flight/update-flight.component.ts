import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { ServiceService } from '../service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-flight',
  templateUrl: './update-flight.component.html',
  styleUrls: ['./update-flight.component.css']
})
export class UpdateFlightComponent implements OnInit {

  user=new User;
  status: any;
 
  constructor(private service :ServiceService) { }

  ngOnInit(): void {
  }

  updateAFlight(form :NgForm){
  this.service.updateAFlight(this.user).subscribe(
    data=>{
      this.status=data;
    }
  )
  form.reset();
  }

}
