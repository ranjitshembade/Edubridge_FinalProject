import { Component } from '@angular/core';
import { ProductData } from '../../../entity/product-data';
import { ProductService } from '../../../service/product-service/productservice.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-adminaddproduct',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './adminaddproduct.component.html',
  styleUrl: './adminaddproduct.component.css'
})
export class AdminAddProductComponent {
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


  addProducts() {
    this.productService
      .addProducts(this.productData)
      .subscribe(() => [
        alert('Product added'),
        (this.productData = new ProductData('', '', '','','','')),
      ]),
      (error: any) => {
        console.error('Error loading product data:', error)
      }
  }

  // updateProductById(productId: number): void {
  //   this.productService
  //     .updateProductById(productId, this.productData)
  //     .subscribe(
  //       () => [
  //         alert('Product updated'),
  //         this.getAllProducts(),
  //         (this.productData = new ProductData('', '', '', '', '')),
  //       ],
  //       (error: any) => {
  //         console.error('Error updating product data:', error);
  //       }
  //     );
  // }

  // deleteProductById(productId: number): void {
  //   this.productService
  //     .deleteProductById(productId)
  //     .subscribe(() => [
  //       alert('Product deleted'),
  //       this.getAllProducts(),
  //       (this.productData = new ProductData('', '', '', '', '')),
  //     ]),
  //     (error: any) => {
  //       console.error('Error deleting product data:', error);
  //     };
  // }
}