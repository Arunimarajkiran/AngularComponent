import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceService } from '../service.service';
import { User } from '../User';

@Component({
  selector: 'app-delete-flight',
  templateUrl: './delete-flight.component.html',
  styleUrls: ['./delete-flight.component.css']
})
export class DeleteFlightComponent implements OnInit {

  user=new User;
  status: any;
 
  constructor(private service :ServiceService) { }

  ngOnInit(): void {
  }

  deleteAFlight(form :NgForm){
  this.service.addAFlight(this.user).subscribe(
    data=>{
      this.status=data;
    }
  )
  form.reset();
  }

}
