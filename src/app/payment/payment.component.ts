import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ThankYou(form:NgForm) {
    this.router.navigate(['thankyoulink']);
  }

}
