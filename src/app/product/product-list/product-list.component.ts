import { Component } from '@angular/core';

import { ProductService } from '../product.service';
import { OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { CartserviceService } from '../../cart/cartservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatInputModule} from '@angular/material/input';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{


  products:Product[]=[];

  filterproducts:Product[]=[];
  sortOrder:string="";


  constructor(private productservice:ProductService,private cartservice:CartserviceService,private snackbar:MatSnackBar){

  }

  ngOnInit(): void {
    
    this.productservice.getreservations().subscribe(data=>{
       this.products=data;
       //si,ilar to all products we need to intialize the filter products to our data
       this.filterproducts=data;
    })

  

  }


  addToCart(product:Product):void{

    this.cartservice.addToCart(product).subscribe({
      next:()=>{
        this.snackbar.open("Product added to cart!!","",{
          duration:2000,
          horizontalPosition:'right',
          verticalPosition: 'top'
        })
      },
      error:(error)=>{
        console.error("Error adding product to cart", error);
        this.snackbar.open("Unable to add product to cart","",{
           duration:2000,
           horizontalPosition:'right',
           verticalPosition:'top'
        })

      }
    });



  }

  applyfilter(event:Event):void{
    let searchterm = (event.target as HTMLInputElement).value;
    console.log(searchterm);
    searchterm = searchterm.toLowerCase();

    this.filterproducts= this.products.filter(product=> product.name.toLowerCase().includes(searchterm));
    console.log(this.filterproducts);

    //after filtering also you need to sort products so we need to add this
    this.sortProducts(this.sortOrder);

  }


  sortProducts(sorvalue:string){
    this.sortOrder = sorvalue;

    if(this.sortOrder==="priceLowHigh"){
          this.filterproducts.sort((a,b)=> a.price-b.price);
    }else if(this.sortOrder==="priceHighLow"){
        this.filterproducts.sort((a,b)=>b.price-a.price);

    }
  }


 

  

}
