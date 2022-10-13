import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  productlist:any=[]
  constructor(private http:HttpClient) { }


  getAllProduct(){
    return this.http.get("https://fakestoreapi.com/products")
  }
}

