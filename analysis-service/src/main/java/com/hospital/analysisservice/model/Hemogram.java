package com.hospital.analysisservice.model;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@Table
public class Hemogram {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private Long wbc;
    private Long rbc;
    private Long hgb;
    private Long hct;
    private Long mcv;
    private Long mch;
    private Long mchc;
    private Long plt;
    private Long baso;

    private Long personId;

    private Date createdDate= new Date();

}
