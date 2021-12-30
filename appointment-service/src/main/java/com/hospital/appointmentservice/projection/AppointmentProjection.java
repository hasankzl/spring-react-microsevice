package com.hospital.appointmentservice.projection;

import com.hospital.appointmentservice.model.APPOINTMENT_MINUTE;
import com.hospital.appointmentservice.model.WORK_HOUR;

import java.util.Date;

public interface AppointmentProjection {

    Long getId();

    String getWorkHour();

    String getAppointmentMinute();

    Date getAppointmentDay();
}
