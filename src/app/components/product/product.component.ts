import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { HttpClient} from '@angular/common/http';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{

  dataLoaded= false;
  products:Product[] = []
  

  constructor(private productService:ProductService , private activatedRoute:ActivatedRoute)
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


}
