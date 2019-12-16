import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    console.log(this.authService.isLoggedIn())
  }

  routeToPage(page: string) {
    console.log(page)
    switch(page) {
      case "home":
        this.router.navigate(["/home"]);
        break;
      case "class":
        this.router.navigate(["/class"]);
        break;
      case "pay":
        this.router.navigate(["/pay"]);
        break;
    }
  }
}
