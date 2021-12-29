package com.hospital.authservice.model;

import lombok.Data;

@Data
public class AppointmentWithDoctor {

    String workHour;
    String AppointmentMinute;
    Doctor doctor;
}
