package com.backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.entity.ProductData;
import com.backend.service.ProductDataService;

@CrossOrigin("*")
@RestController
@RequestMapping("/products")
public class ProductController {
	private final ProductDataService productdataservice;
	
	public ProductController(ProductDataService productdataservice) {
		this.productdataservice = productdataservice;
	}
	
	@PostMapping("/addProducts")
	public void addProduct(@RequestBody ProductData product) {
		System.out.println(product);
		productdataservice.addProduct(product);
	}
	
	@GetMapping("/getProducts")
	public List<ProductData> getProducts(){
		return productdataservice.getProducts();
	}

	@GetMapping("/{id}")
    public ProductData getProductById(@PathVariable Long id) {
        return productdataservice.getProductById(id);
    }
	
	@PutMapping("/{id}")
    public void updateProductById(@PathVariable Long id, @RequestBody ProductData updatedProduct) {
        productdataservice.updateProductById(id, updatedProduct);
    }
	
	@DeleteMapping("/{id}")
    public void deleteProductById(@PathVariable Long id) {
        productdataservice.deleteProductById(id);
    }
}
