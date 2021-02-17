package com.ecommerceapp.service;

import com.ecommerceapp.dao.CountryRepository;
import com.ecommerceapp.model.Country;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CountryService {
    private CountryRepository countryRepository;

    @Autowired
    public CountryService(CountryRepository countryRepository) {
        this.countryRepository = countryRepository;
    }

    public List<Country> getAllCountries(){
        return countryRepository.findAll();
    }
}
