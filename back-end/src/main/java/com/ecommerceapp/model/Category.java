package com.ecommerceapp.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import java.util.Set;


@Data  // getter setter
@AllArgsConstructor
@NoArgsConstructor
public class Category extends BaseEntity {

    @Column(name = "category_name")
    private String categoryName;

    @OneToMany(mappedBy = "category",fetch = FetchType.LAZY)
    private Set<Product> products;
}
