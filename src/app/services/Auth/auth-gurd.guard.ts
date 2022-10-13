import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './Auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGurdGuard implements CanActivate {

    constructor(private authServe:AuthService,private router:Router){

    }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {


      if(this.authServe.islog()){
        console.log(this.authServe.islog())
        return true
      }
      else{
        // console.log(true)
        alert("You Are Must Login First")
        this.router.navigate(["/login/",state.url])
        console.log(state.url)
        return false
      }
      //  console.log(state)
      // return false
  }
}
