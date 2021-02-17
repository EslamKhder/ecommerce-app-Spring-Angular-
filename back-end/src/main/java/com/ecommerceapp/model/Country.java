package com.ecommerceapp.model;

import lombok.Data;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Data
@Entity
@Table(name = "country")
public class Country extends BaseEntity{

    @Column(name = "code")
    private String code;

    @Column(name = "name")
    private String name;

    @OneToMany(mappedBy = "country",fetch = FetchType.LAZY)
    private Set<State> states;
}
