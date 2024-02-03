package com.backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class ProductData {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long pId;
	private String pName;
	private String pDescription;
	private Double pPrice;
	private Integer pQuantity;
	private String pImgurl;
	
	public ProductData() {
		super();
		// TODO Auto-generated constructor stub
	}

	public ProductData(Long pId, String pName, String pDescription, Double pPrice, Integer pQuantity, String pImgurl) {
		super();
		this.pId = pId;
		this.pName = pName;
		this.pDescription = pDescription;
		this.pPrice = pPrice;
		this.pQuantity = pQuantity;
		this.pImgurl = pImgurl;
	}

	public Long getpId() {
		return pId;
	}

	public void setpId(Long pId) {
		this.pId = pId;
	}

	public String getpName() {
		return pName;
	}

	public void setpName(String pName) {
		this.pName = pName;
	}

	public String getpDescription() {
		return pDescription;
	}

	public void setpDescription(String pDescription) {
		this.pDescription = pDescription;
	}

	public Double getpPrice() {
		return pPrice;
	}

	public void setpPrice(Double pPrice) {
		this.pPrice = pPrice;
	}

	public Integer getpQuantity() {
		return pQuantity;
	}

	public void setpQuantity(Integer pQuantity) {
		this.pQuantity = pQuantity;
	}

	public String getpImgurl() {
		return pImgurl;
	}

	public void setpImgurl(String pImgurl) {
		this.pImgurl = pImgurl;
	}
	
	
	
}
