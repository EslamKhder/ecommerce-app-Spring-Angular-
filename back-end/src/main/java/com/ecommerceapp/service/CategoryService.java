package com.ecommerceapp.service;

import com.ecommerceapp.dao.CategoryRepository;
import com.ecommerceapp.model.Category;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class CategoryService {

    private CategoryRepository categoryRepository;

    public List<Category> getCategories(){
        return  categoryRepository.findAll();
    }
}
