package com.ecommerceapp.dao;

import com.ecommerceapp.model.Product;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    public List<Product> findByCategoryId(Long id, Pageable pageable);

    public List<Product> findByNameContaining(String keyword, Pageable pageable);

    @Query("select COUNT (id) FROM Product WHERE category.id = ?1")
    public long getProductsSizeByCategoryId(long id);

    @Query("SELECT COUNT (id) FROM Product WHERE name LIKE %?1%") // key%  %key %key%
    public long getProductsSizeByKey(String key);
}
