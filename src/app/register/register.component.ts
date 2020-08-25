import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceService } from "../service.service";
import { User } from "../User";
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

  
  ngOnInit(): void {
  }
  status;

    user=new User;
    constructor(private service :ServiceService, private router: Router) { }

    sendEmail(){
      this.service.sendEmail(this.user).subscribe
      (data => console.log(data));
    }

    registerAUser(form :NgForm){
      this.sendEmail();
      alert(JSON.stringify(this.user));
    this.service.registerAUser(this.user).subscribe(
      data=>{
        this.status=data;
      }
    )
    form.reset();
    //this.router.navigate(['thankyoulink']);
    }
}
