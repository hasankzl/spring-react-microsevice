package com.hospital.authservice.model;


import lombok.Data;

import javax.persistence.*;

@Entity
@Table
@Data
public class Person {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "email",unique = true)
    private String email;

    @Column(name="name", length=25, nullable=false)
    private String name;

    @Column(name="surname", length=25, nullable=false)
    private String surname;

    @Column(name="password",  nullable=false)
    private String password;

    @Column(name="role")
    private String role;

    private Long doctorId;
}
