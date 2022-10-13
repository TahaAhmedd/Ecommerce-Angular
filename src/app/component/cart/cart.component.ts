import { Component, OnInit } from '@angular/core';
import { CarrtService } from 'src/app/services/api/carrt.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  productlist:any=[];
  totalPrice:number =0
  constructor(private cartService:CarrtService) { }

  ngOnInit(): void {
    this.cartService.getAllItem().subscribe(res=>{
      this.productlist = res;
      
      this.productlist.forEach((element:any) => {
        
        this.totalPrice +=Number( element.price + element.price)
      });
      
    })
  }

  // addToCart(product:any){
  //   this.cartService.addToCart(product) 
  // }
  delete(prd:any){
    this.cartService.removeItem(prd)
    // console.log(prd)
  }
}
