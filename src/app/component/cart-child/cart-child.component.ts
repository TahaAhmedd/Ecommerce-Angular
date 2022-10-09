import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { CartArgumentsModule } from 'src/app/modal/cart-arguments/cart-arguments.module';
import { Catigory } from 'src/app/modal/catigory';
import { product } from 'src/app/modal/product';
import { SproductService } from 'src/app/services/sproduct.service';

@Component({
  selector: 'app-cart-child',
  templateUrl: './cart-child.component.html',
  styleUrls: ['./cart-child.component.css']
})
export class CartChildComponent implements OnChanges {


  // productlist:product[]=[];
  @Input() catlist:number=0;

  @Output() recevidBuy:EventEmitter<CartArgumentsModule>
  // quantity:number;
  // recivedqty:number =0; // for test -Quantity
  totalPrice:number = 0; 
  catProductList:product[]=[]
  constructor(private catServices:SproductService ) {
  //   this.productlist = 
  //   [
  //     {"id":1 , "name":"Head Phone","quantity":10 , "price":25 , "img":"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX472_AV4?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1570119352353",catId:1},
  //     {"id":2 , "name":"Camera","quantity":5 , "price":50 , "img":"https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg",catId:2},

  //     {"id":3 , "name":"Iphone","quantity":8 , "price":100 , "img":"https://images.squarespace-cdn.com/content/v1/59d2bea58a02c78793a95114/1604517546555-J765GMQHYO74IFMZ2RWQ/iphone+12.png?format=1000w",catId:3},
  //     {"id":4 , "name":"Iphone se","quantity":2 , "price":1000 , "img":"https://images.squarespace-cdn.com/content/v1/59d2bea58a02c78793a95114/1587413587555-BPQ9MKZIOZJJJ77IZB45/image-asset.jpeg",catId:3},
  //   ]

    // this.quantity =  this.catServices.getQuantity(this.recivedqty) // for test -Quantity

    this.recevidBuy= new EventEmitter<CartArgumentsModule>()
    
  }
  ngOnInit(): void {
  }

  ngOnChanges():void{
    // if(this.catlist == 0)
    //   {
    //    this.catProductList = this.productlist
    //   }
    //   else
    //   {this.catProductList = this.productlist.filter(prd => prd.catId == this.catlist)}

    this.catProductList = this.catServices.getCatId( this.catlist)
    
    
  }

  buy(price:number,count:number,qty:any){

    if(count == 0)
      this.totalPrice += price
    else
      this.totalPrice += +price * +count  ; 
    
  }

  addToCart(id:number, name:string,price:number,image:string,count:number){
    this.recevidBuy.emit(
      {id:id,
      name:name,
      price:price,
      img:image,
      count:count }
    )
        
  }
}
