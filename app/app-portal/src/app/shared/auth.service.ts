import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import * as moment from "moment";
import { environment } from '../../environments/environment';
import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn: boolean
  userPool = new AmazonCognitoIdentity.CognitoUserPool({
    UserPoolId: "ap-southeast-1_w59tmrbZG",
    ClientId: "7vpkjchu8l26bboc8h5ebbvq5h"
  });

  constructor(private http: HttpClient, private router: Router) { }

  signIn = async (Username, Password) => {

    const authenticationData = {
      Username, // your username here
      Password
    };
    const authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(
      authenticationData
    );
    const userData = {
      Username,
      Pool: this.userPool
    };
    const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

    return new Promise((resolve, reject) => {
      cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: (result:any) => {
          // const idToken = result.getIdToken().getJwtToken();
          const idToken = result.getIdToken().getJwtToken();
          console.log(result)
          resolve(idToken);
        },
        newPasswordRequired: function (userDetails) {     
          delete userDetails.email_verified;
          delete userDetails.phone_number_verified;
          userDetails.name = "Jake";
          userDetails.family_name = "Tan";
          cognitoUser.completeNewPasswordChallenge(Password, userDetails, this);
        },
        onFailure: err => {
          reject(err.message || JSON.stringify(err))
        }
      });
    });
  };

  public setLoggedIn() {
    this.loggedIn = true;
  }


  login(loginReq: any) {
    return this.http.post(environment.LOGIN_POST_URL, loginReq).subscribe((data: any) => {
      this.setSession(data)
      this.loggedIn = true;
      this.router.navigate(['/home'])
    }, error => {
      console.log(error);
    })
  }

  private setSession(authResult) {
    // const expiresAt = moment().add(authResult.expiresIn, 'second');
    localStorage.setItem('id_token', authResult.idToken);
    // localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
  }

  public logout() {
    localStorage.clear();
    // localStorage.removeItem("expires_at");
    this.loggedIn = false;
    this.router.navigate(['/login']);
  }

  public isLoggedIn() {
    if (window.localStorage.getItem("id_token")) {
      return true;
    }
    return false;
    // return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    // convert text into JSON
    const expiresAt = JSON.parse(localStorage.getItem("expires_at"));
    return moment(expiresAt);
  }
}
