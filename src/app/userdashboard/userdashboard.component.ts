import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

  constructor() { }

  firstName: string;
  ngOnInit(): void {
    this.firstName = sessionStorage.getItem('firstName');
  }


}
