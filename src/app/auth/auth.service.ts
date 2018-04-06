import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  authenticated: boolean;

  constructor(private router: Router) {
    this.checkIfLoggedin();
  }

  //let options = new RequestOptions({ headers: headers, withCredentials: true });
  //this.http.post(this.connectUrl, <stringified_data> , options)

  checkIfLoggedin(){
    //ask api
    //to-do use environment.apiUrl+'/isLoggedIn' returns yes, no
    this.authenticated = false;
  }

  get isLoggedIn(): boolean {
    // Check if current date is greater
    // than expiration and user is logged in
    //const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    //return Date.now() < expiresAt && this.authenticated;
    return this.authenticated;
  }
}
