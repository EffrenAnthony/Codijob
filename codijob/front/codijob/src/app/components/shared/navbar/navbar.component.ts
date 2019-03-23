import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import {Router} from '@angular/router'


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _sAuth:AuthService,
              private _sRouter:Router) { }

  ngOnInit() {
  }

  logOut(){ 
    this._sAuth.isLoggedOut();
    this._sRouter.navigateByUrl('/');

  }

}
