package com.hospital.hospitalservice.model;

import lombok.Data;

import javax.persistence.*;

@Table
@Entity
@Data
public class Doctor {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;

    private String surname;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "department_id", nullable = false)
    private Department department;

    private String img;

    private String specialty;

    private String email;
}
