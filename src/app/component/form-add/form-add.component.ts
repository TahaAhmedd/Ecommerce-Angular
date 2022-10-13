import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRegister } from 'src/app/modal/users';
import { AuthService } from 'src/app/services/Auth/Auth';
@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.css']
})
export class FormAddComponent{
  adduser: FormGroup;
  check = true;
  constructor(private authServe:AuthService , router:Router) {
    this.adduser = new FormGroup(
      {
        Name:new FormControl("",[Validators.required,Validators.minLength(5)]),
        UserName: new FormControl("",[Validators.required]),
        Password: new FormControl("",[Validators.required]),
      },
    )
    
  };
  validathionpass(passwordkey:string , confirmpassword:string):boolean
  {
     if(passwordkey !== confirmpassword )  
     {
      // console.log(passwordkey.valueOf())
        return this.check = false;
     }
     else
     {
      return this.check = true;
     }
  } 

  add(){
    let user:UserRegister = this.adduser.value as UserRegister;
    console.log(user)
    this.authServe.register(user).subscribe((res)=>
    {
      console.log(res)
    })
  }
  

}
