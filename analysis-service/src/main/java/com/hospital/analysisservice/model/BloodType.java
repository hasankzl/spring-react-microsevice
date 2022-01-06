package com.hospital.analysisservice.model;

import lombok.Data;

import javax.persistence.*;
import java.lang.annotation.Target;
import java.util.Date;

@Entity
@Table
@Data
public class BloodType {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Enumerated(EnumType.STRING)
    private BLOOD_TYPE blood_type;

    private Date createdDate = new Date();
    private Long personId;

}
