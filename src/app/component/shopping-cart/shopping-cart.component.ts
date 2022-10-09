import { Component, OnInit } from '@angular/core';
import { CartArgumentsModule } from 'src/app/modal/cart-arguments/cart-arguments.module';
import { Catigory } from 'src/app/modal/catigory';
import { product } from 'src/app/modal/product';
import { ScatigoryService } from 'src/app/services/scatigory.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  catigoryList:Catigory[]=[];
  productlist:CartArgumentsModule[]=[]
  selectCat:number=0;
  constructor(private catigoryServisec:ScatigoryService) {
    // this.catigoryList = [
    //   {name:"All Product",id:0},
    //   {name:"Head Phone",id:1},
    //   {name:"Camera",id:2},
    //   {name:"Mobile",id:3},
    // ]

    this.catigoryList = catigoryServisec.getAllCatigory();
   }

  ngOnInit(): void {
  }

  recivedCartItem(value:CartArgumentsModule){
    // this.productopj =value
    // console.log(this.productList)

    this.productlist.push(value)
  }

  removeItem(index:number){
    console.log(index)
    if(index !== -1){
      this.productlist.splice(index, 1)
    }
  }
}
