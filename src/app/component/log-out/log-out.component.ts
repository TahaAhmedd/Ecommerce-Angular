import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/Auth/Auth';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {

  constructor(private authserve:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.logout()
  }

  logout(){
    this.authserve.logout().subscribe((e)=>{
      console.log("remove token");
      this.authserve.removeToken();
      this.authserve.setLoggedStatus(false)
      this.router.navigate(['/login/',""])
    })
  }
}
