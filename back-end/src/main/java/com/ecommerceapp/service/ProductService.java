package com.ecommerceapp.service;

import com.ecommerceapp.dao.ProductRepository;
import com.ecommerceapp.model.Product;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ProductService {

    private ProductRepository productRepository;

    public List<Product> getProducts(){
        return productRepository.findAll();
    }

    public List<Product> getProductsByCategoryId(Long id) {
        return this.productRepository.findByCategoryId(id);
    }

    public List<Product> getProductsByKeyWord(String key){
        return productRepository.findByNameContaining(key);
    }
    public Product getProductById(Long id){
        return this.productRepository.findById(id).get();
    }
}
