import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserLogin } from 'src/app/modal/users';
import { AuthService } from 'src/app/services/Auth/Auth';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  addform: FormGroup;
  returnurl:string=""
  constructor(private AuthServe:AuthService,private router:Router,private active:ActivatedRoute) { 
    this.addform = new FormGroup({
      UserName:new FormControl("",[Validators.required]),
      Password:new FormControl("",[Validators.required]),})

    }
    
  ngOnInit(): void {
    this.returnurl = this.active.snapshot.paramMap.get("path")??""
    console.log(this.returnurl)
  }

  add(){
    let user:UserLogin = this.addform.value as UserLogin
    this.AuthServe.login(user).subscribe((res)=>
    {
      // console.log(res)
      if(res.Success == true)
      {
        this.AuthServe.setToken(res.Data);
        this.AuthServe.setLoggedStatus(true)

        if(this.returnurl == "")
          this.router.navigateByUrl("/")
        else
          this.router.navigateByUrl(this.returnurl)
      }
    })
  }
}
