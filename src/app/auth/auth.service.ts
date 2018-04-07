import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AuthService {

  private authenticated = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) {
    this.checkIfLoggedin();

    setTimeout(() => { this.logOut(); }, 3000);
  }

  //let options = new RequestOptions({ headers: headers, withCredentials: true });
  //this.http.post(this.connectUrl, <stringified_data> , options)

  checkIfLoggedin(){
    //ask api
    //to-do use environment.apiUrl+'/isLoggedIn' returns yes, no
    this.authenticated.next(true);
  }

  logOut(){
    //to-do call api to logout first
    console.log('Logged out');
    this.authenticated.next(false);
    this.router.navigate(['/home']);
  }

  get isLoggedIn() {
    // Check if current date is greater
    // than expiration and user is logged in
    //const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    //return Date.now() < expiresAt && this.authenticated;
    return this.authenticated.asObservable();
  }
}
