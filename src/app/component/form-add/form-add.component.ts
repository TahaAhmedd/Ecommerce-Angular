import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.css']
})
export class FormAddComponent{
  adduser: FormGroup;
  check = true;
  constructor() {
    this.adduser = new FormGroup(
      {
        name:new FormControl("",[Validators.required,Validators.minLength(5)]),
        email: new FormControl("",[Validators.required,Validators.email]),
        password: new FormControl("",[Validators.required,Validators.minLength(7)]),
        password2: new FormControl("",[Validators.required,Validators.minLength(7)]),
        accept: new FormControl("",[Validators.required])
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



}
