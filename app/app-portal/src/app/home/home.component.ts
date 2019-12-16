import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { DataService } from '../shared/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name: any
  paidSchoolFee: boolean = true;
  studentId: any;

  constructor(private router: Router, private authServcie: AuthService, private dataService: DataService) { }

  ngOnInit() {
    this.name = window.localStorage.getItem("name")
    this.studentId = localStorage.getItem("studentId");
    this.paidSchoolFee = JSON.parse(localStorage.getItem("paidSchoolFee"));
  }

  paySchoolFee() {
    this.dataService.getPaymentAmount(localStorage.getItem("studentType")).subscribe((data:any) => {
      let successUrl = "https://d2x5gz3eiq3cid.cloudfront.net/payment?status=success";
      let failureUrl = "https://d2x5gz3eiq3cid.cloudfront.net/payment?status=failure";
      localStorage.setItem("amount", data.amount);
      this.dataService.createPayment(data.amount, successUrl, failureUrl).subscribe((data: any) => {
        window.location.href = data.redirect_link;
      })
    })
  }

  goToClass() {
    this.router.navigate(['/class'])
    let timeStamp =  new Date().getTime() + "";
    window.sessionStorage.setItem("oldTime", timeStamp)
  }

}