import { Component } from '@angular/core';
import { ProductService } from '../../../service/product-service/productservice.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-adminupdateproduct',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './adminupdateproduct.component.html',
  styleUrl: './adminupdateproduct.component.css'
})
export class AdminupdateproductComponent {

  productData: any = {};

    constructor(private productService: ProductService) {}

  updateProductById(): void {
    const productId = this.productData.pId;
    this.productService.getProductById(productId).subscribe(
        (existingProduct) => {
            // Update the existing product with the new data
            existingProduct.pName = this.productData.pName;
            existingProduct.pDescription = this.productData.pDescription;
            existingProduct.pPrice = this.productData.pPrice;
            existingProduct.pQuantity = this.productData.pQuantity;
            existingProduct.pImgurl = this.productData.pImgurl;

            // Call the productService to update the product
            this.productService.updateProductById(productId, existingProduct).subscribe(
                () => {
                    alert('Product updated');
                    // Assuming you have a method to fetch all products
                    // this.getAllProducts();
                    this.productData = {};
                },
                (error: any) => {
                    console.error('Error updating product data:', error);
                }
            );
        },
        (error: any) => {
            console.error('Error fetching product data:', error);
        }
    );
}
}
