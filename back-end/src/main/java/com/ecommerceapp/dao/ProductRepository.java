package com.ecommerceapp.dao;

import com.ecommerceapp.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    public List<Product> findByCategoryId(Long id);

    public List<Product> findByNameContaining(String keyword); // sh
}
