package com.ecommerceapp.service;

import com.ecommerceapp.dao.ProductRepository;
import com.ecommerceapp.model.Product;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
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
}
