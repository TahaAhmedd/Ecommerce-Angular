import { Component, OnInit } from '@angular/core';
import { PrmothinAdsService } from 'src/app/services/prmothin-ads.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  recevedads:string=""
  constructor(private adsServes:PrmothinAdsService) { }

  ngOnInit(): void {
    this.adsServes.getAds(2).subscribe({
      next:(data)=>{
        // console.log(data)
        this.recevedads = data
      },
      error:err=> console.log(err),

      complete:()=>console.log("asdas")
    })
  }

}
