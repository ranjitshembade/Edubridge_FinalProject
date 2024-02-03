package com.backend.service.imp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.entity.ProductData;
import com.backend.repository.ProductRepo;
import com.backend.service.ProductDataService;

@Service
public class ProductDataServiceImp implements ProductDataService {
	
	@Autowired
	ProductRepo productrepo;

	@Override
	public void addProduct(ProductData product) {
		productrepo.save(product);
	}

	@Override
	public List<ProductData> getProducts() {
		return productrepo.findAll();
	}
	
	@Override
    public ProductData getProductById(Long uId) {
        return productrepo.findById(uId).orElse(null);
    }
	
	@Override
    public void updateProductById(Long uId, ProductData updatedUser) {
        updatedUser.setpId(uId);
        productrepo.save(updatedUser);
    }
	
	@Override
    public void deleteProductById(Long uId) {
        productrepo.deleteById(uId);
    }

}
