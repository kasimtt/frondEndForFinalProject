import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{

  dataLoaded= false;
  products:Product[];
  filterText="";

  constructor(private productService:ProductService , private activatedRoute:ActivatedRoute , 
   private toastrService:ToastrService, private cartService:CartService
    )
  {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["categoryId"])
      {
        this.getProductByCategoryId(params["categoryId"]);
      }
      else
      {
        this.getProduct();
      }
    })
  }
  getProduct()
  {
    this.productService.getProduct().subscribe(response=>{
      this.products = response.data;
      this.dataLoaded = true;
    })
  } 
  getProductByCategoryId(categoryId:number)
  {
    this.productService.getProductByCategoryId(categoryId).subscribe(response=>{
      this.products = response.data;
      this.dataLoaded = true;
    }) 
  }

  addToCart(product:Product){
  this.toastrService.success("Product Added",product.productName)  
  this.cartService.addCartItem(product);
 }

}
