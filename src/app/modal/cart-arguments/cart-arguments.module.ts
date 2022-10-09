import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CartArgumentsModule { 
  id:number =0;
  name:string="";
  img:string="";
  price:number=0;
  count:number=1
}
