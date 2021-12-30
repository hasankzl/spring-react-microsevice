package com.hospital.appointmentservice.model;


import com.fasterxml.jackson.annotation.JsonFormat;
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

    @JsonFormat(pattern = "yyyy-MM-dd",timezone = "Europe/Istanbul")
    private Date appointmentDay;

    private WORK_HOUR workHour;

    private APPOINTMENT_MINUTE appointmentMinute;

    private Long doctorId;

    private Long userId;


    public String getWorkHour() {
        return workHour.toString();
    }

    public String getAppointmentMinute() {
        return appointmentMinute.toString();
    }

    public void setWorkHour(String workHour) {
        this.workHour = WORK_HOUR.valueOf(workHour);
    }

    public void setAppointmentMinute(String appointmentMinute) {
        this.appointmentMinute = APPOINTMENT_MINUTE.valueOf(appointmentMinute);
    }
}
