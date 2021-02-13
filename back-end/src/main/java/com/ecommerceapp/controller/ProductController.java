package com.ecommerceapp.controller;


import com.ecommerceapp.model.Product;
import com.ecommerceapp.service.ProductService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/")
@CrossOrigin("http://localhost:4200")
@AllArgsConstructor
public class ProductController {

    private ProductService productService;

    @GetMapping("products")
    public List<Product> getProducts(@RequestParam int page,@RequestParam int size){
        return productService.getProducts(page,size);
    }

    @GetMapping("productsbycategory")
    public List<Product> getProductsByCategoryId(@RequestParam Long id,@RequestParam int page,@RequestParam int size) {
        return this.productService.getProductsByCategoryId(id,page,size);
    }

    @GetMapping("productskey")
    public List<Product> getProductsByKeyWord(@RequestParam String key,@RequestParam int page,@RequestParam int size){
        return productService.getProductsByKeyWord(key,page,size);
    }
    @GetMapping("product")
    public Product getProductById(@RequestParam Long id){
        return this.productService.getProductById(id);
    }

    @GetMapping("productssize")
    public long getProductsLength(){
        return productService.getProductsLength();
    }

    @GetMapping("sizebycategoryid")
    public long getProductsSizeByCategoryId(@RequestParam long id){
        return productService.getProductsSizeByCategoryId(id);
    }

    @GetMapping("productssizebykey")
    public long getProductsSizeByKey(@RequestParam String key){
        return productService.getProductsSizeByKey(key);
    }
}
