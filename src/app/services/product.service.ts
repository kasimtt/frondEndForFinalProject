import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';;
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl="https://localhost:44360/api/";
  constructor(private httpClient:HttpClient) { }
  
  
  getProduct():Observable<ListResponseModel<Product>>
  {
    let newPath = this.apiUrl+"products/getall"
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }

  
  getProductByCategoryId(categoryId:number):Observable<ListResponseModel<Product>>
  {
    let newPath = this.apiUrl +"products/getbycategoryid?categoryId="+categoryId;
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }
}
