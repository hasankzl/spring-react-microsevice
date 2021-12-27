package com.hospital.appointmentservice.model;


import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

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

    @DateTimeFormat(pattern="dd/MM/yyyy")
    private Date appointmentDay;

    private WORK_HOUR work_hour;

    private APPOINTMENT_MINUTE appointment_minute;

    private Long doctorId;

    private Long userId;


    public String getWork_hour() {
        return work_hour.toString();
    }

    public String getAppointment_minute() {
        return appointment_minute.toString();
    }
}
