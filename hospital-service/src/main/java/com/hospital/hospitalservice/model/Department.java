package com.hospital.hospitalservice.model;


import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Table
@Data
public class Department {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;

    private String description;

    private String img;
    @OneToMany(mappedBy = "department")
    private List<Doctor> doctorList;

}
