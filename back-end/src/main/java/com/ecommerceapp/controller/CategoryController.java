package com.ecommerceapp.controller;

import com.ecommerceapp.model.Category;
import com.ecommerceapp.service.CategoryService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("api/")
@AllArgsConstructor
public class CategoryController {

    private CategoryService categoryService;

    @GetMapping("categories")
    public List<Category> getCategories(){
        return  categoryService.getCategories();
    }
}
