import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators ,Validator} from '@angular/forms';
@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.css']
})
export class FormAddComponent implements OnInit {
  adduser: FormGroup;
  check = false;
  constructor() {
    this.adduser = new FormGroup(
      {
        name:new FormControl("",[Validators.required,Validators.minLength(5)]),
        email: new FormControl("",[Validators.required,Validators.email]),
        password: new FormControl("",[Validators.required,Validators.minLength(7)]),
        password2: new FormControl("",[Validators.required,Validators.minLength(7)])
      },
    )
    
  };
  validathionpass(passwordkey:string , confirmpassword:string)
  {
     if(passwordkey != confirmpassword )  
     {
        this.check = true;
        return true
     }
     else
     {
      this.check = false;
      return false
     }
  } 


  ngOnInit(): void {
  }

}
