import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../shared/data.service';
import { RedisService } from '../redis.service';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent implements OnInit {
  classList: any[];
  student_id: any;

  paidSchoolFee: boolean = true;
  studentId: any;

  constructor(private router: Router, private redisService: RedisService, private dataService: DataService) { }

  ngOnInit() {
    this.studentId = localStorage.getItem("studentId");
    this.paidSchoolFee = JSON.parse(localStorage.getItem("paidSchoolFee"));

    // Pre Fetch
    this.dataService.getAttendance("IS110", "1").subscribe((data: any) => {
      localStorage.setItem("IS110", JSON.stringify(data.value));
    })

    try {
      this.redisService.getRedis(localStorage.getItem('studentId')).subscribe((data: any) => {
        if (data.status != "failure") {

          console.log("GET FROM REDIS")
          let timeTaken = new Date().getTime() - JSON.parse(window.sessionStorage.getItem("oldTime"))
          console.log("Get from REDIS time taken: " + timeTaken / 1000 + " seconds.")

          this.classList = JSON.parse(data[localStorage.getItem('studentId')].replace(/^\s+|\s+$/g, ""));
        } else {

          console.log("GET FROM MODULE")

          this.dataService.viewModules(localStorage.getItem('studentId')).subscribe((data: any) => {

            let timeTaken = new Date().getTime() - JSON.parse(window.sessionStorage.getItem("oldTime"))
            console.log("Get from MODULE time taken: " + timeTaken / 1000 + " seconds.")

            this.classList = data.value

            let redisReq = {
              key: localStorage.getItem('studentId'),
              value: JSON.stringify(this.classList)
            }
            this.redisService.setRedis(redisReq).subscribe((data: any) => {
              this.classList = data;
            })
          })
        }
      })
    } catch (err) {
      console.log("GET FROM MODULE")

      this.dataService.viewModules(localStorage.getItem('studentId')).subscribe((data: any) => {
        this.classList = data.value
        let timeTaken = new Date().getTime() - JSON.parse(window.sessionStorage.getItem("oldTime"))
        console.log("Get from MODULE time taken: " + timeTaken / 1000 + " seconds.")

        let redisReq = {
          key: localStorage.getItem('studentId'),
          value: JSON.stringify(this.classList)
        }
        this.redisService.setRedis(redisReq).subscribe((data: any) => {
          this.classList = data;
        })
      })
    }
  }

  goToAttendance(module_id, section_id) {
    this.router.navigate(['/attendance'], { queryParams: { module_id: module_id, section_id: section_id } })
    let timeStamp =  new Date().getTime() + "";
    window.sessionStorage.setItem("oldTime", timeStamp)
  }

  preFetchAttendance() {
    console.log("hello")
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
