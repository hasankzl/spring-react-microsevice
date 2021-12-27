package com.hospital.appointmentservice.payload;

import lombok.Data;

@Data
public class Doctor {

    private Long id;

    private String name;

    private String surname;

    private Department department;

    private String img;

    private String specialty;

    private String email;
}
