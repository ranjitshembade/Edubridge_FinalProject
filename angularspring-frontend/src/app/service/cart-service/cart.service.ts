import { Injectable } from '@angular/core';
import { ProductData } from '../../entity/product-data';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: ProductData[] = [];

  constructor(private http: HttpClient) {}

  addToCart(product: ProductData): void {
    this.cartItems.push(product);
  }

  getCartItems(): ProductData[] {
    return this.cartItems;
  }

  clearCart(): void {
    this.cartItems = [];
  }

  createOrder(productId: string, customerId: string): Observable<any> {
    const url = `http://localhost:8080/orders/createOrder/${productId}/${customerId}`;
    return this.http.post<any>(url, null);
  }

  buy(customerId: string): void {
    for (const item of this.cartItems) {
      this.createOrder(item.pId.toString(), customerId).subscribe(
        (response) => {
          console.log('Order created successfully:', response);
        },
        (error) => {
          console.error('Error creating order:', error);
        }
      );
    }

    this.clearCart();
  }

}
