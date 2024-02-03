package com.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.service.OrderDataService;

@CrossOrigin("*")
@RestController
@RequestMapping("/orders")
public class OrderController {

    private final OrderDataService orderDataService;

    @Autowired
    public OrderController(OrderDataService orderDataService) {
        this.orderDataService = orderDataService;
    }

    @PostMapping("/createOrder/{productId}/{customerId}")
    public void createOrder(@PathVariable Long productId, @PathVariable Long customerId) {
        orderDataService.createOrder(productId, customerId);
    }
}
