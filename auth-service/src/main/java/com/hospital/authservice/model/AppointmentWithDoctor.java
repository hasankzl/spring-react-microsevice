package com.hospital.authservice.model;

import lombok.Data;

import java.util.Date;

@Data
public class AppointmentWithDoctor {

    private Long id;
    String workHour;
    String AppointmentMinute;
    private Date appointmentDay;
    Doctor doctor;
}
