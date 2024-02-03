package com.backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class OrderData {
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long orderId;

    @ManyToOne
    @JoinColumn(name = "productId")
    private ProductData product;

    @ManyToOne
    @JoinColumn(name = "customerId")
    private UserData customer;

    private String paymentStatus = "Pending";
    private String orderStatus = "Completed";
    
	public OrderData() {
		super();
		// TODO Auto-generated constructor stub
	}

	public OrderData(ProductData product, UserData customer) {
        this.product = product;
        this.customer = customer;
    }
	public Long getOrderId() {
		return orderId;
	}

	public void setOrderId(Long orderId) {
		this.orderId = orderId;
	}

	public ProductData getProduct() {
		return product;
	}

	public void setProduct(ProductData product) {
		this.product = product;
	}

	public UserData getCustomer() {
		return customer;
	}

	public void setCustomer(UserData customer) {
		this.customer = customer;
	}

	public String getPaymentStatus() {
		return paymentStatus;
	}

	public void setPaymentStatus(String paymentStatus) {
		this.paymentStatus = paymentStatus;
	}

	public String getOrderStatus() {
		return orderStatus;
	}

	public void setOrderStatus(String orderStatus) {
		this.orderStatus = orderStatus;
	}
    
    
}
