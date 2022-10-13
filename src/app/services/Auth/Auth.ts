import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { UserLogin, UserRegister } from "src/app/modal/users";
import { APIResponse } from "src/app/viewModel/ApiResult";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    log: BehaviorSubject<boolean>
    constructor(private httb:HttpClient)
    {
        this.log = new BehaviorSubject<boolean>(this.islog())
    }


    // subjict
    setLoggedStatus(status: boolean) {
        this.log.next(status)
    }
    getLoggedStatus() {
        return this.log.asObservable()
    }
    
    islog():boolean{
        if(localStorage.getItem('user') )
            return true
        
        else
            return false
    }
    // users
    login(user:UserLogin){
        return this.httb.post<APIResponse<string>>(environment.ApiUrl + "/User/Login",user)
    }

    register(user:UserRegister)
    {
        return this.httb.post<APIResponse<boolean>>(`${environment.ApiUrl}/User/POST`,user)
    }

    logout() {
        // let opthions ={
        //     headers: new HttpHeaders({
        //         "content-Type":"application/json",
        //         "token":this.getToken()??''
        //     })
        // }
        console.log("log Out")
        return this.httb.post(`${environment.ApiUrl}/User/logout`,{})
      }
    // Token
    setToken(tkn:string)
    {
        localStorage.setItem("user",tkn);
    }

    getToken()
    {
        return localStorage.getItem("user");
    }

    removeToken()
    {
        localStorage.removeItem("user");
    }
}