import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { ServiceService } from '../service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.css']
})
export class SearchFlightComponent implements OnInit {

  user=new User;
  status: any;
 
  constructor(private service :ServiceService) { }

  ngOnInit(): void {
  }

  searchAFlight(form :NgForm){
  this.service.searchAFlight(this.user).subscribe(
    data=>{
      this.status=data;
    }
  )
  form.reset();
  }

}
