package com.ecommerceapp.model;

import java.math.BigDecimal;
import java.util.Date;

public class Product {

    private Long id;

    private String sky;

    private String name;

    private String description;

    private BigDecimal unitPrice;

    private String imageUrl;

    private boolean active;

    private int unitsInStock;

    private Date dateCreated;

    private Date lastUpdated;

    private Category category;
}
