package com.backend.service.imp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.entity.OrderData;
import com.backend.entity.ProductData;
import com.backend.entity.UserData;
import com.backend.repository.OrderRepo;
import com.backend.service.OrderDataService;
import com.backend.service.ProductDataService;
import com.backend.service.UserDataService;

import jakarta.transaction.Transactional;

@Service
public class OrderDataServiceImp implements OrderDataService {

    @Autowired
    private OrderRepo orderRepo;

    @Autowired
    private ProductDataService productDataService;

    @Autowired
    private UserDataService userDataService;

    @Override
    @Transactional
    public void createOrder(Long productId, Long customerId) {
        ProductData product = productDataService.getProductById(productId);
        UserData customer = userDataService.getUserById(customerId);

        if (product != null && customer != null && product.getpQuantity() > 0) {
            OrderData order = new OrderData(product, customer);
            orderRepo.save(order);

            // Update product quantity
            product.setpQuantity(product.getpQuantity() - 1);
            productDataService.updateProductById(productId, product);
        }
    }
}