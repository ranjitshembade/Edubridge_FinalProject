package com.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backend.entity.UserData;

@Repository
public interface UserRepo extends JpaRepository<UserData, Long>{

}
