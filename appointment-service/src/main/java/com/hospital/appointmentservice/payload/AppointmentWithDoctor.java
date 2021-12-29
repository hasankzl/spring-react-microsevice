package com.hospital.appointmentservice.payload;

import com.hospital.appointmentservice.model.Appointment;
import lombok.Data;

@Data
public class AppointmentWithDoctor {

    String workHour;
    String AppointmentMinute;
    Doctor doctor;
}
