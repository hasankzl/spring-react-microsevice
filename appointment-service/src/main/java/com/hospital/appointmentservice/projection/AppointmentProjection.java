package com.hospital.appointmentservice.projection;

import com.hospital.appointmentservice.model.APPOINTMENT_MINUTE;
import com.hospital.appointmentservice.model.WORK_HOUR;

public interface AppointmentProjection {

    String getWorkHour();

    String getAppointmentMinute();
}
