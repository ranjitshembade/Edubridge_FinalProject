package com.backend.service;

import java.util.List;

import com.backend.entity.UserData;

public interface UserDataService {
	public void addUser(UserData user);
	
	public List<UserData> getUsers();
	
	public UserData getUserById(Long uId);
	
	public void updateUserById(Long uId, UserData updatedUser);

	public void deleteUserById(Long uId);

}
