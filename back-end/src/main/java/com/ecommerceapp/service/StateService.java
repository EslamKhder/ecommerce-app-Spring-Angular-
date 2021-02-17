package com.ecommerceapp.service;

import com.ecommerceapp.dao.StateRepository;
import com.ecommerceapp.model.State;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StateService {

    private StateRepository stateRepository;

    @Autowired
    public StateService(StateRepository stateRepository) {
        this.stateRepository = stateRepository;
    }

    public List<State> getAllStates(String code){
        return stateRepository.findByCountryCode(code);
    }
}
