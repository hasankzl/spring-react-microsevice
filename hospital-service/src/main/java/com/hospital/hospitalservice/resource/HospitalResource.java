package com.hospital.hospitalservice.resource;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HospitalResource {


    @GetMapping("/")
    public String getName(){

        return "hi, this is hosptal service";
    }
}
