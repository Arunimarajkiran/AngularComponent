import { Component, OnInit } from '@angular/core';
import { AdminLogin } from "./AdminLogin";
import { Router } from "@angular/router";
import { ServiceService } from "../service.service";

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  login : AdminLogin=new AdminLogin();
  message : String;
  status : any;

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  loginCustomer() {
    this.service.loginCustomer(this.login).subscribe(data=>{
        alert(JSON.stringify(data));
        if(data.status=='SUCCESS') {
            let userId=data.userId;/*th*/
            let userName=data.name;

            sessionStorage.setItem('userId',String(userId));
            sessionStorage.setItem('userName',userName);
            this.router.navigate(['thankyoulink']);
        }
        else {
            this.message=data.message;
        }
    })
  }

}
