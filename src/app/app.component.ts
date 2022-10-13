import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { LodingServiceService } from './services/Interceptor/loding-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tasks-angular';

  islooding:Subject<boolean>

  constructor(private LoaderServe:LodingServiceService){
    this.islooding = this.LoaderServe.isodding
  }
}
