import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import * as $ from 'jquery';
import 'bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
	//show login modal!
        $('#loginModal').modal({
            show: true
        });
        $('#loginModal').on('hidden.bs.modal',  () => {
            // do something...
            this.closePopup();
        })
        //alert('login!');
  }

  closePopup() {
    // Providing a `null` value to the named outlet
    // clears the contents of the named outlet
    this.router.navigate([{ outlets: { popup: null }}]);
  }
}
