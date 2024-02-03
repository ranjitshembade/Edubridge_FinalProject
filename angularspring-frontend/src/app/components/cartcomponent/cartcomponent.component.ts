import { Component } from '@angular/core';
import { ProductData } from '../../entity/product-data';
import { CartService } from '../../service/cart-service/cart.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthserviceService } from '../../service/auth-service/authservice.service';

@Component({
  selector: 'app-cartcomponent',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './cartcomponent.component.html',
  styleUrl: './cartcomponent.component.css'
})
export class CartcomponentComponent {
  cartItems: ProductData[] = [];

  constructor(private cartService: CartService, private authService: AuthserviceService) {
    this.cartItems = this.cartService.getCartItems();
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.cartItems = [];
  }

  buy(): void {
    // Check if the user is logged in
    if (this.authService.isUserLoggedIn()) {
      // Get the logged-in user's ID
      const customerId = this.authService.getLoggedInUserId();

      // Ensure customerId is not null before calling buy
      if (customerId !== null) {
        // Use the updated CartService method to create an order
        this.cartService.buy(customerId);
        // Redirect to a confirmation page or any other page after purchase
        // (You can implement this in the CartService.buy method)
      } else {
        console.error('Customer ID is null.'); // Handle the null case appropriately
      }
    } else {
      // Redirect to the login page if the user is not logged in
      // (You can implement this based on your application flow)
    }
  }
}
