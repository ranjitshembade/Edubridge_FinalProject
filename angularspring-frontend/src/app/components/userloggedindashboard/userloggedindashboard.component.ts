import { Component } from '@angular/core';
import { NavbarComponent } from "../navbarcomponent/navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductData } from '../../entity/product-data';
import { ProductService } from '../../service/product-service/productservice.service';
import { CartService } from '../../service/cart-service/cart.service';
@Component({
    selector: 'app-userloggedindashboard',
    standalone: true,
    templateUrl: './userloggedindashboard.component.html',
    styleUrl: './userloggedindashboard.component.css',
    imports: [NavbarComponent,CommonModule,FormsModule]
})
export class UserloggedindashboardComponent {
  ngOnInit(): void {
    // Trigger the method when the component is initialized
    this.getAllProducts();
  }

  productList: ProductData[] = []

  productData = new ProductData('', '', '','','','')

  constructor(private productService: ProductService, private cartService: CartService) {}

  getAllProducts(): void {
    this.productService
      .getAllProducts()
      .subscribe((data) => [(this.productList = data), console.log(data)]),
      (error: any) => {
        console.error('Error loading product data:', error)
      }
  }

  addToCart(product: ProductData): void {
    this.cartService.addToCart(product);
  }

}
