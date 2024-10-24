import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';
import { CartserviceService } from '../cartservice.service';


@Component({
  selector: 'app-cartview',
  templateUrl: './cartview.component.html',
  styleUrl: './cartview.component.css'
})
export class CartviewComponent implements OnInit {


  constructor(private cartservice:CartserviceService){

  }


  cart:Product[]=[];

  totalprice:number=0;

 ngOnInit(): void {
 

  this.cartservice.getCartItems().subscribe(data=>{
    this.cart=data;
  })

  this.totalprice=this.gettotalprice();

  
   
 }

 gettotalprice():number{

 let total=0;
 for(let cart of this.cart){
   total+=cart.price;
 }
 return total;
}

clearcart():void{
  this.cartservice.clearCart().subscribe(()=>{
    console.log("clear item called");
  })
}

// addtocart():Product{
//   this.cartservice.addToCart().subscribe(()=>{
//     console.log("Added the cart");
//     return new 
//   })
// }


checkout():void{

  this.cartservice.checkout(this.cart).subscribe();

}






 

 


}
