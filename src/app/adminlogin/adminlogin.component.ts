import { Component, OnInit } from '@angular/core';
import { AdminLogin } from "./AdminLogin";
import { Router } from "@angular/router";
import { ServiceService } from "../service.service";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  adminlogin : AdminLogin=new AdminLogin();
  message : String;
  status : any;

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  loginAdmin(form :NgForm) {
    this.service.loginAdmin(this.adminlogin).subscribe(data=>{
        alert(JSON.stringify(data));
        if(data.status=='SUCCESS') {
            let userId=data.id;/*th*/
            let userName=data.name;

            sessionStorage.setItem('userId',String(userId));
            sessionStorage.setItem('userName',userName);
            this.router.navigate(['admindashboard']);
        }
        else {
            this.message=data.message;
        }
    })
  }
}
