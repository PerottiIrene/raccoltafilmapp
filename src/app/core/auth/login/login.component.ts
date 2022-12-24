import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Utente } from 'src/app/model/utente';
import { Subject, takeUntil } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy{

  utente:Partial<Utente>={
  username:'',
  password: ''
  }

  destroy$:Subject<boolean> =new Subject();
  
  constructor(private router:Router,private authService:AuthService) { }

  ngOnDestroy(): void {
    this.destroy$.next(true)
    this.destroy$.complete();
  }

  ngOnInit(): void {
  }

  backToWelcome(loginForm:NgForm){
    if(loginForm.valid)
      this.authService.login(loginForm.value).pipe(
        takeUntil(this.destroy$)).subscribe(res =>{
          this.authService.setUserLogged(res);
       this.router.navigate(['welcome'])
    })
  }

}
