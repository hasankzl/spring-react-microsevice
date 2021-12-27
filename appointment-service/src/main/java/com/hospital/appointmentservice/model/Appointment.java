package com.hospital.appointmentservice.model;


import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table
@Data
public class Appointment {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private Date createdDate = new Date();

    private Date appointmentStartDate;

    private Date appointmentEndDate;

    private Long doctorId;

    private Long userId;
}
