import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { HttpClient} from '@angular/common/http';
import { ProductResponseModel } from 'src/app/models/productResponseModel';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{

  dataLoaded= false;
  products:Product[] = []
  

  constructor(private productService:ProductService)
  {}
  ngOnInit(): void {
    this.getProduct();
  }
  getProduct()
  {
    this.productService.getProduct().subscribe(response=>{
      this.products = response.data;
      this.dataLoaded = true;
    })
  }
}
