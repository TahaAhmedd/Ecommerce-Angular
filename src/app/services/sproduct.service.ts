import { Injectable } from '@angular/core';
import { product } from '../modal/product';

@Injectable({
  providedIn: 'root'
})
export class SproductService {
  productlist:product[];
  constructor() { 
    this.productlist = 
    [
      {"id":1 , "name":"Head Phone","quantity":10 , "price":25 , "img":"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX472_AV4?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1570119352353",catId:1},
      {"id":2 , "name":"Camera","quantity":5 , "price":50 , "img":"https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg",catId:2},

      {"id":3 , "name":"Iphone","quantity":8 , "price":100 , "img":"https://images.squarespace-cdn.com/content/v1/59d2bea58a02c78793a95114/1604517546555-J765GMQHYO74IFMZ2RWQ/iphone+12.png?format=1000w",catId:3},
      {"id":4 , "name":"Iphone se","quantity":2 , "price":1000 , "img":"https://images.squarespace-cdn.com/content/v1/59d2bea58a02c78793a95114/1587413587555-BPQ9MKZIOZJJJ77IZB45/image-asset.jpeg",catId:3},
    ]

  }

  getAllProduct(){
    return this.productlist;
  }

  getCatId(catList:number){
    if(catList == 0)
    {return this.productlist}

    else{
      return this.productlist.filter(prd => prd.catId == catList)
    }
  }
}
