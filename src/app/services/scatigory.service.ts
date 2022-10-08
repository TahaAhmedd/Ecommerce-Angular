import { Injectable } from '@angular/core';
import { Catigory } from '../modal/catigory';

@Injectable({
  providedIn: 'root'
})
export class ScatigoryService {
  catigoryList:Catigory[];
  constructor() { 
    this.catigoryList = [
      {name:"All Product",id:0},
      {name:"Head Phone",id:1},
      {name:"Camera",id:2},
      {name:"Mobile",id:3},
    ]
  }

  getAllCatigory(){
    return this.catigoryList
  }
}
