package com.hospital.appointmentservice.payload;


import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

@Data
public class AppointmentWithPerson {


    private Long id;
    private String workHour;
    private String AppointmentMinute;
    private Date appointmentDay;
    private Person person;
}
