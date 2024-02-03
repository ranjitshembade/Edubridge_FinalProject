package com.backend.service;

import java.util.List;

import com.backend.entity.ProductData;


public interface ProductDataService {
	public void addProduct(ProductData product);
	
	public List<ProductData> getProducts();
	
	public ProductData getProductById(Long uId);
	
	public void updateProductById(Long uId, ProductData updatedProduct);

	public void deleteProductById(Long uId);
}
