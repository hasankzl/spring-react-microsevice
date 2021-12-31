package com.hospital.authservice.model;


import lombok.Data;

@Data
public class PersonWithDoctor {

    Person person;

    Doctor doctor;
}
