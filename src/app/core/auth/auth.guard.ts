import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

//e' una specie di service
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService:AuthService,private router:Router){}

  canActivate(): boolean {
    console.log(this.authService.isLoggedIn())
      if(this.authService.isLoggedIn()){
      return true;
    }else{
      this.router.navigateByUrl("login")
      return false;
    }
  }
  
}
