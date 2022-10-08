import { Component, OnInit } from '@angular/core';
import { Catigory } from 'src/app/modal/catigory';
import { ScatigoryService } from 'src/app/services/scatigory.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  catigoryList:Catigory[]=[];
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


}
