package com.ecommerceapp.controller;


import com.ecommerceapp.model.State;
import com.ecommerceapp.service.StateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/")
@CrossOrigin("http://localhost:4200")
public class StateController {
    private StateService stateService;

    @Autowired
    public StateController(StateService stateService) {
        this.stateService = stateService;
    }

    @GetMapping("/states")
    public List<State> getAllStates(@RequestParam String code){
        return stateService.getAllStates(code);
    }
}
