package com.ecommerceapp.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "state")
public class State extends BaseEntity{

    @Column(name = "name")
    private String name;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "country_id")
    private Country country;
}
