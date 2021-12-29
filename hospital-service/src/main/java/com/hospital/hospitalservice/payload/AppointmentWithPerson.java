package com.hospital.hospitalservice.payload;


import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.util.Date;

@Data
public class AppointmentWithPerson {


    private Long id;
    private String workHour;
    private String appointmentMinute;
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date  appointmentDay;
    private Person person;
}
