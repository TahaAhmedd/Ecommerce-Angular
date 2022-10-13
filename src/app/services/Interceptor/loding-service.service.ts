import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LodingServiceService {
  isodding:Subject<boolean>
  constructor() { 
    this.isodding = new Subject<boolean>();
  }

  showload(){
    return this.isodding.next(true)
  }

  hidelooding(){
    return this.isodding.next(false)
  }
}
