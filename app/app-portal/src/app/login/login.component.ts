import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AuthService } from '../shared/auth.service';
import { DataService } from '../shared/data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean = false;
  title = 'Log in';

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService, private dataService: DataService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  get f() { return this.loginForm.controls }

  // login() {
  //   this.submitted = true;
  //   console.log(this.loginForm)
  //   if (this.submitted) {
  //     this.authService.login((this.loginForm.value));
  //   }
  // }

  login() {
    this.submitted = true;
    if (this.submitted) {
      this.authService.signIn(this.loginForm.get("email").value, this.loginForm.get("password").value).then((result: any) => {
        console.log(result)
        localStorage.setItem('id_token', result);
        this.authService.setLoggedIn();
        -this.dataService.getStudentDetails(this.loginForm.get("email").value).subscribe((data: any) => {
          localStorage.setItem('studentId', data.value.studentId);
          localStorage.setItem('name', data.value.name);
          localStorage.setItem('studentType', data.value.studentType);

          this.dataService.getPaymentStatus(data.value.studentId).subscribe((data: any) => {
            localStorage.setItem('paidSchoolFee', data.value.paid);
            localStorage.setItem("annualYear", data.value.annualYear);
            localStorage.setItem("semester", data.value.semester)
            
            this.router.navigate(["/home"]).then(() => {
              window.location.reload();
            })
          }) 
        })

      })
    }
  }
}
