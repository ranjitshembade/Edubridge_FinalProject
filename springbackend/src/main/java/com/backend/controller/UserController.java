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

import com.backend.entity.UserData;
import com.backend.service.UserDataService;

@CrossOrigin("*")
@RestController
@RequestMapping("/users")
public class UserController {
	private final UserDataService userdataservice;
	
	public UserController(UserDataService userdataservice) {
		this.userdataservice = userdataservice;
	}
	
	@PostMapping("/addUsers")
	public void addUser(@RequestBody UserData user) {
		System.out.println(user);
		userdataservice.addUser(user);
	}
	
	@GetMapping("/getUsers")
	public List<UserData> getUsers(){
		return userdataservice.getUsers();
	}
	
	@GetMapping("/{id}")
    public UserData getUserById(@PathVariable Long id) {
        return userdataservice.getUserById(id);
    }

	@PutMapping("/{id}")
    public void updateUserById(@PathVariable Long id, @RequestBody UserData updatedUser) {
        userdataservice.updateUserById(id, updatedUser);
    }
	
	@DeleteMapping("/{id}")
    public void deleteUserById(@PathVariable Long id) {
        userdataservice.deleteUserById(id);
    }
	
	/*
	 * @PutMapping("/{id}") public Book updateBook(@PathVariable Long
	 * id, @RequestBody Book updatedBook) { updatedBook.setId(id); return
	 * bookRepository.save(updatedBook); }
	 * 
	 * @DeleteMapping("/{id}") public void deleteBook(@PathVariable Long id) {
	 * bookRepository.deleteById(id); }
	 */
	
}
