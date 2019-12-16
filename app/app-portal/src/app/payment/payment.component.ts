import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  status: string;
  paymentId: string;
  token: string;
  payerId: string;

  paidSchoolFee: boolean = true;
  studentId: any;


  constructor(private route:ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.status = params['status'];
      this.paymentId = params['paymentId'];
      this.token = params['token'];
      this.payerId = params['PayerID'];
    })

    let amount = localStorage.getItem("amount");
    let studentId = localStorage.getItem("studentId");
    let annualYear = localStorage.getItem("annualYear");
    let semester = localStorage.getItem("semester")

    if (this.status == "success") {
      this.paidSchoolFee = true;
      this.dataService.updatePayment(this.paymentId, this.token, this.payerId, amount, studentId, annualYear, semester).subscribe((data:any) => {
        console.log(data.message)
        this.studentId = localStorage.getItem("studentId");
        localStorage.setItem('paidSchoolFee', "true");     
      })
    } else {
      this.paidSchoolFee = false;
    }
  }

  paySchoolFee() {
    this.dataService.getPaymentAmount(localStorage.getItem("studentType")).subscribe((data:any) => {
      let successUrl = "https://d2x5gz3eiq3cid.cloudfront.net/payment?status=success";
      let failureUrl = "https://d2x5gz3eiq3cid.cloudfront.net/payment?status=failure";
      
      // let successUrl = "http://localhost:4200/payment?status=success";
      // let failureUrl = "http://localhost:4200/payment?status=failure";
      
      localStorage.setItem("amount", data.amount);
      this.dataService.createPayment(data.amount, successUrl, failureUrl).subscribe((data: any) => {
        window.location.href = data.redirect_link;
      })
    })
  }
}
