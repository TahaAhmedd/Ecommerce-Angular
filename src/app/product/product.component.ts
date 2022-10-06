import { Component, OnInit } from '@angular/core';
import {product} from "../modal/product";
import { Catigory } from '../modal/catigory';
import { Discountoffers } from "../modal/discountoffers";
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  discount:Discountoffers = 0;
  storeName:string = "";
  storeLogo:string = "";
  productList:product[]=[];
  catigoryList:Catigory[] = [];
  clinetName:string = "";
  isPurshased:boolean = true;

  lest:product[]=[];
  constructor() {
    let p1:product = {"id":0 , "name":"Head Phone","quantity":10 , "price":25 , "img":"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX472_AV4?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1570119352353"}
    let p2:product ={"id":1 , "name":"Camera","quantity":5 , "price":50 , "img":"https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg"}
    let p3:product ={"id":2 , "name":"Iphone","quantity":8 , "price":100 , "img":"https://images.squarespace-cdn.com/content/v1/59d2bea58a02c78793a95114/1604517546555-J765GMQHYO74IFMZ2RWQ/iphone+12.png?format=1000w"}
    let p4:product ={"id":3 , "name":"Iphone se","quantity":2 , "price":1000 , "img":"https://images.squarespace-cdn.com/content/v1/59d2bea58a02c78793a95114/1587413587555-BPQ9MKZIOZJJJ77IZB45/image-asset.jpeg"}

    this.lest.push(p1);
    this.lest.push(p2);
    this.lest.push(p3);
    this.lest.push(p4);
  }

  ngOnInit(): void {
  }


}
