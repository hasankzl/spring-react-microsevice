package com.hospital.analysisservice.model;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@Table
public class Kreatinin {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private Long kreatin;

    private Long egrf;

    private Long personId;

    private Date createdDate= new Date();
}
