import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  appLoggedIn: Observable<boolean>;
  constructor(private myauth: AuthService){
	this.appLoggedIn = this.myauth.isLoggedIn;
  }
}
