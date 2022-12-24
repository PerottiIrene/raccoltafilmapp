import { Router } from '@angular/router';
import { AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public authService:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.authService.logout()
   this.backToLogin()
  }

  backToLogin(){
    this.router.navigate(['login'])
  }

  backToWelcome(){
    this.router.navigate(['welcome'])
  }

}
