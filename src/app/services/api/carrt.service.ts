import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CarrtService {
  public cartItemList=new BehaviorSubject<any>([]);
  productList:any=[]
  constructor() {
   }

   getAllItem(){
    return this.cartItemList.asObservable()
   }

   setAllItem(product:any){
    this.productList.push(...product);
    this.cartItemList.next(product)
   }

   addToCart(product:any){
    this.productList.push(product)
    this.cartItemList.next(this.productList)
    // console.log(product)
   }

   removeItem(prd:any){
    this.productList.map((a:any,index:number)=>{
      if(prd.id === a.id){
        this.productList.splice(index , 1)
      }
    })
   }
}
