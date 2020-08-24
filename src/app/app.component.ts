import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pg1';
  constructor(private router:Router){}
  getHome(){
    this.router.navigate(['/homelink']);
  }
  getPlan(){
    this.router.navigate(['/plan&booklink']);
  }
  getClasses(){
    this.router.navigate(['/classeslink']);
  }
  getDiscover(){
    this.router.navigate(['/discoverlink']);
  }
  getRegister(){
    this.router.navigate(['/registerlink']);
  }
  getLogin(){
    this.router.navigate(['/loginlink']);
  }
}

