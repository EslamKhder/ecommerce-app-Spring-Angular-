package com.ecommerceapp.model;

import java.util.HashSet;
import java.util.Set;

public class Country extends BaseEntity{

    private String code;

    private String name;

    Set<State> states = new HashSet<>();
}
