import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductData } from '../../../entity/product-data';
import { ProductService } from '../../../service/product-service/productservice.service';

@Component({
  selector: 'app-productspage',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './productspage.component.html',
  styleUrl: './productspage.component.css'
})
export class ProductspageComponent {

  ngOnInit(): void {
    // Trigger the method when the component is initialized
    this.getAllProducts();
  }

  productList: ProductData[] = []

  productData = new ProductData('', '', '','','','')

  constructor(private productService: ProductService) {}

  getAllProducts(): void {
    this.productService
      .getAllProducts()
      .subscribe((data) => [(this.productList = data), console.log(data)]),
      (error: any) => {
        console.error('Error loading product data:', error)
      }
  }
}
