package com.ecommerceapp.controller;


import com.ecommerceapp.model.Product;
import com.ecommerceapp.service.ProductService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;
import java.util.List;

@RestController
@RequestMapping("api/")
@CrossOrigin("http://localhost:4200")
@AllArgsConstructor
public class ProductController {

    private ProductService productService;

    @GetMapping("products")
    public List<Product> getProducts(){
        return productService.getProducts();
    }

    @GetMapping("productsbycategory")
    public List<Product> getProductsByCategoryId(@RequestParam Long id) {
        return this.productService.getProductsByCategoryId(id);
    }

}
