import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrmothinAdsService {
  adsArr;
  constructor() {
    this.adsArr = [
      "https://image.shutterstock.com/image-vector/brush-sale-banner-vector-260nw-1090866878.jpg",
      "https://image.shutterstock.com/image-vector/red-banner-special-offer-260nw-1035467014.jpg",
      "https://image.shutterstock.com/image-vector/black-friday-sale-banner-modern-260nw-1830876314.jpg",
    ]

   }

   getAds(timer:number):Observable<string>
   {
     return new Observable<string>((obs)=>
     {
      let counter=0
      let ads = setInterval(()=>{
        // console.log("interval")
        if(counter == this.adsArr.length)
        {
          counter=0
        }
        obs.next(this.adsArr[counter]);
        counter++

        // How to convert object to Array?
      },timer*1000)
      
      return{
        unsubscribe(){
          clearInterval(ads);
        }
      }
     }
     )
   }
}
