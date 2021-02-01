package com.ecommerceapp.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;


@Data  // getter setter
@AllArgsConstructor
@NoArgsConstructor
public class Category extends BaseEntity {

    private String categoryName;

    private Set<Product> products;
}
