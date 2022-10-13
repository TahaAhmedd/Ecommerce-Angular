import { Component, OnInit } from '@angular/core';
import { CarrtService } from 'src/app/services/api/carrt.service';
import { AuthService } from 'src/app/services/Auth/Auth';

@Component({
  selector: 'app-navpar',
  templateUrl: './navpar.component.html',
  styleUrls: ['./navpar.component.css']
})
export class NavparComponent implements OnInit {
  islog:boolean;
  counter:number=0
  constructor(private auhserve:AuthService,private cartServise:CarrtService) {
    this.islog = this.auhserve.islog()
   }

  ngOnInit(): void {
    this.auhserve.getLoggedStatus().subscribe((res)=>{
      this.islog = res
      // console.log(res)

      this.cartServise.getAllItem().subscribe(res=>{
        this.counter = res.length
      })
    })
  }
}
