import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from "./User";
import { Login } from "./login/Login";
import { AdminLogin } from "./adminlogin/AdminLogin";
import { LoginStatus } from "./login/LoginStatus";
import { AdminLoginStatus } from "./adminlogin/AdminLoginStatus";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  registerAUser(user: User){
    var url="http://localhost:8080/register";
    return this.http.post(url,user);
  }

  loginCustomer(login: Login):Observable<LoginStatus>{
    var url="http://localhost:8080/login";
    return this.http.post<LoginStatus>(url,login);
  }

  loginAdmin(adminlogin: AdminLogin):Observable<AdminLoginStatus>{
    var url="http://localhost:8080/adminlogin";
    return this.http.post<AdminLoginStatus>(url,adminlogin);
  }

  sendEmail(user:User){
    var url="http://localhost:8080/hello";
    return this.http.post(url,user);

  }

}
