package com.ecommerceapp.service;

import com.ecommerceapp.dao.ProductRepository;
import com.ecommerceapp.model.Product;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ProductService {

    private ProductRepository productRepository;

    public List<Product> getProducts(int page,int size){
        Pageable pageable = PageRequest.of(page,size);
        return productRepository.findAll(pageable).getContent();
    }

    public List<Product> getProductsByCategoryId(Long id,int page,int size) {
        Pageable pageable = PageRequest.of(page,size);
        return this.productRepository.findByCategoryId(id,pageable);
    }

    public List<Product> getProductsByKeyWord(String key,int page,int size){
        Pageable pageable = PageRequest.of(page,size);
        return productRepository.findByNameContaining(key,pageable);
    }
    public Product getProductById(Long id){
        return this.productRepository.findById(id).get();
    }
}
