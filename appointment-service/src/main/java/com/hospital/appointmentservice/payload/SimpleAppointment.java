package com.hospital.appointmentservice.payload;

import lombok.Data;

import java.util.Date;

@Data
public class SimpleAppointment {
    private String workHour;
    private String AppointmentMinute;
    private Date appointmentDay;
}
