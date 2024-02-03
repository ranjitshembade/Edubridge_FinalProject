package com.backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class UserData {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long uId;
	private String uName;
	private String uEmail;
	private Long uContact;
	private String uAddress;
	private String uPassword;
	
	public UserData() {
		super();
		// TODO Auto-generated constructor stub
	}

	public UserData(Long uId, String uName, String uEmail, Long uContact,String uAddress, String uPassword) {
		super();
		this.uId = uId;
		this.uName = uName;
		this.uEmail = uEmail;
		this.uContact = uContact;
		this.uAddress = uAddress;
		this.uPassword = uPassword;
	}

	public Long getuId() {
		return uId;
	}

	public void setuId(Long uId) {
		this.uId = uId;
	}

	public String getuName() {
		return uName;
	}

	public void setuName(String uName) {
		this.uName = uName;
	}

	public String getuEmail() {
		return uEmail;
	}

	public void setuEmail(String uEmail) {
		this.uEmail = uEmail;
	}

	public String getuPassword() {
		return uPassword;
	}

	public void setuPassword(String uPassword) {
		this.uPassword = uPassword;
	}

	public Long getuContact() {
		return uContact;
	}

	public void setuContact(Long uContact) {
		this.uContact = uContact;
	}

	public String getuAddress() {
		return uAddress;
	}

	public void setuAddress(String uAddress) {
		this.uAddress = uAddress;
	}

}
