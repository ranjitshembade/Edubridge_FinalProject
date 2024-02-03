import { Component } from '@angular/core';
import { ProductData } from '../../../entity/product-data';
import { ProductService } from '../../../service/product-service/productservice.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admindeleteproduct',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admindeleteproduct.component.html',
  styleUrl: './admindeleteproduct.component.css'
})
export class AdmindeleteproductComponent {

  productList: ProductData[] = []

  productData = new ProductData('', '', '','','','')
  fetchProductId: undefined;

  constructor(private productService: ProductService) {}

  getAllProducts(): void {
    this.productService
      .getAllProducts()
      .subscribe((data) => [(this.productList = data), console.log(data)]),
      (error: any) => {
        console.error('Error loading product data:', error)
      }
  }

  deleteProduct(): void {
    if (this.fetchProductId !== undefined) {
        this.productService.deleteProductById(this.fetchProductId).subscribe(
            () => {
                alert('Product deleted');
                this.getAllProducts(); // Assuming you have a method to fetch all products
                this.productData = new ProductData('', '', '', '', '','');
            },
            (error: any) => {
                console.error('Error deleting product data:', error);
            }
        );
    }
}
}
