import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {
  contacts: any;
  selectedContact;
  classId: any;
  module_id: string;
  section_id: string;
  student_id = 1;
  module_list: any;

  paidSchoolFee: boolean = true;
  studentId: any;

  constructor(public dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.module_id = params['module_id'];
      this.section_id = params['section_id'];
    })

    if (this.module_id == "IS110") {
      console.log("PRE-FETCH applied for IS110")
      this.module_list = JSON.parse(localStorage.getItem("IS110"));
      let timeTaken = new Date().getTime() - JSON.parse(window.sessionStorage.getItem("oldTime"))

      console.log("Pre-fetch time taken: " + timeTaken / 1000 + " seconds.")

    } else {
      this.dataService.getAttendance(this.module_id, "1").subscribe((data: any) => {
        console.log("NO PRE-FETCH")
        let timeTaken = new Date().getTime() - JSON.parse(window.sessionStorage.getItem("oldTime"))
        console.log("No pre-fetch time taken: " + timeTaken / 1000 + " seconds.")
        this.module_list = data.value;
      })
    }

    this.studentId = localStorage.getItem("studentId");
    this.paidSchoolFee = JSON.parse(localStorage.getItem("paidSchoolFee"));
  }

  updateAttendance(week_id: number) {
    this.dataService.markAttendance(this.module_id, this.section_id, week_id, 1).subscribe((data: any) => {
      this.dataService.getAttendance(this.module_id, "1").subscribe((data: any) => {
        this.module_list = data.value;
      })
      // this.module_list = [{ "present": false, "weekId": 1, "moduleId": "IS112", "studentId": 1 }, { "present": false, "weekId": 2, "moduleId": "IS112", "studentId": 1 }, { "present": false, "weekId": 3, "moduleId": "IS112", "studentId": 1 }]
    });
  }

  paySchoolFee() {
    this.dataService.getPaymentAmount(localStorage.getItem("studentType")).subscribe((data: any) => {
      let successUrl = "https://d2x5gz3eiq3cid.cloudfront.net/payment?status=success";
      let failureUrl = "https://d2x5gz3eiq3cid.cloudfront.net/payment?status=failure";
      localStorage.setItem("amount", data.amount);
      this.dataService.createPayment(data.amount, successUrl, failureUrl).subscribe((data: any) => {
        window.location.href = data.redirect_link;
      })
    })
  }
}
