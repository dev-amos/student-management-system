import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  paidSchoolFee: boolean = true;
  studentId: any;

  constructor(private dataService: DataService) { }

  // { "studentId": 1, "annualYear": 2019, "semester": 1, "paid": true }

  ngOnInit() {
    this.studentId = localStorage.getItem("studentId");
    this.dataService.getPaymentStatus(this.studentId).subscribe((data: any) => {
      this.paidSchoolFee = data.value.paid;
      localStorage.setItem("annualYear", data.value.annualYear);
      localStorage.setItem("semester", data.value.semester)
    })
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
}
