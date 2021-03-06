package com.hospital.appointmentservice.payload;

import com.hospital.appointmentservice.model.Appointment;
import lombok.Data;

import java.util.Date;

@Data
public class AppointmentWithDoctor {

    private Long id;
    private String workHour;
    private String AppointmentMinute;
    private Date appointmentDay;
    private Doctor doctor;
}
