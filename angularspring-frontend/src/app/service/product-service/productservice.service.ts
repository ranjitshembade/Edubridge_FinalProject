import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { ProductData } from '../../entity/product-data'

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private cartItems: ProductData[] = [];

  baseUrl = 'http://localhost:8080'

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/products/getProducts`)
  }

  getProductById(productId: number): Observable<ProductData> {
    return this.http.get<ProductData>(`${this.baseUrl}/products/${productId}`);
  }

  addProducts(productData: ProductData): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/products/addProducts`, productData)
  }

  updateProductById(productId: number, updatedProduct: ProductData): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/products/${productId}`, updatedProduct);
  }

  deleteProductById(productId: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/products/${productId}`);
  }



}
