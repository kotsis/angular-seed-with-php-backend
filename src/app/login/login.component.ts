import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';
import 'bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
	//show login modal!
        $('#loginModal').modal({
            show: true
        });
        //alert('login!');
  }

}
