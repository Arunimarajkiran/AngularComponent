import { Component, OnInit } from '@angular/core';
import { Login } from "./Login";
import { Router } from '@angular/router';
import { ServiceService } from "../service.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  login : Login=new Login();
  message : String;
  status : any;

  ngOnInit(): void {
  }

  constructor(private service: ServiceService, private router: Router) {}


  loginCustomer() {
      this.service.loginCustomer(this.login).subscribe(data=>{
          alert(JSON.stringify(data));
          if(data.status=='SUCCESS') {
              let userId=data.userId;
              let userName=data.name;

              sessionStorage.setItem('userId',String(userId));
              sessionStorage.setItem('userName',userName);
              this.router.navigate(['dashboardlink']);
          }
          else {
              this.message=data.message;
          }
      })
  }
}
