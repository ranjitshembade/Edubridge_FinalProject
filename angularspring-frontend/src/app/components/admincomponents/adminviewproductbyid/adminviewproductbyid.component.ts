import { Component } from '@angular/core';
import { ProductData } from '../../../entity/product-data';
import { ProductService } from '../../../service/product-service/productservice.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-adminviewproductbyid',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './adminviewproductbyid.component.html',
  styleUrl: './adminviewproductbyid.component.css'
})
export class AdminviewproductbyidComponent {

  productList: ProductData[] = []

  productData = new ProductData('', '', '','','','')
  fetchProductId: undefined;

  constructor(private productService: ProductService) {}


getProductById(): void {
    if (this.fetchProductId !== undefined) {
      this.productService.getProductById(this.fetchProductId).subscribe(
        (data) => {
          this.productData = data;
        },
        (error: any) => {
          console.error('Error loading product data:', error);
        }
      );
    }
  }
}
