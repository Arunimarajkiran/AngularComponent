import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceService } from "../service.service";
import { User } from "../User";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  ngOnInit(): void {
  }
  status;

    user=new User;
    constructor(private service :ServiceService) { }

    registerAUser(form :NgForm){
      alert(JSON.stringify(this.user));
    this.service.registerAUser(this.user).subscribe(
      data=>{
        this.status=data;
      }
    )
    }
}
