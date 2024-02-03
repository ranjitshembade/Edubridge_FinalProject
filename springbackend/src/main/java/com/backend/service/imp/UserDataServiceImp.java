package com.backend.service.imp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.entity.UserData;
import com.backend.repository.UserRepo;
import com.backend.service.UserDataService;

@Service
public class UserDataServiceImp implements UserDataService{

	@Autowired
	UserRepo userrepo;
	
	@Override
	public void addUser(UserData user) {
		userrepo.save(user);
	}

	@Override
	public List<UserData> getUsers() {
		return userrepo.findAll();
	}

	@Override
    public UserData getUserById(Long uId) {
        return userrepo.findById(uId).orElse(null);
    }
	
	@Override
    public void updateUserById(Long uId, UserData updatedUser) {
        updatedUser.setuId(uId);
        userrepo.save(updatedUser);
    }
	
	@Override
    public void deleteUserById(Long uId) {
        userrepo.deleteById(uId);
    }

	

}
