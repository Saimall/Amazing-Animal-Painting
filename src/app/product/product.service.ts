import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment.development';

import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private apiurl= environment.apiurl + "/products";

  constructor(private http:HttpClient) { }


  getreservations():Observable<Product[]>{
    
    return this.http.get<Product[]>(this.apiurl);

  }

  

}
