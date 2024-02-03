package com.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backend.entity.ProductData;

@Repository
public interface ProductRepo extends JpaRepository<ProductData, Long> {

}
