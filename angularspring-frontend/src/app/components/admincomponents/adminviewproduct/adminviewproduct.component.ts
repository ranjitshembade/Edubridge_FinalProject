import { Component } from '@angular/core';
import { ProductData } from '../../../entity/product-data';
import { ProductService } from '../../../service/product-service/productservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-adminviewproduct',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './adminviewproduct.component.html',
  styleUrl: './adminviewproduct.component.css'
})
export class AdminviewproductComponent {
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
