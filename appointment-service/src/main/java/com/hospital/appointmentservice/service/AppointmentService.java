package com.hospital.appointmentservice.service;

import com.hospital.appointmentservice.model.Appointment;
import com.hospital.appointmentservice.payload.AppointmentWithDoctor;
import com.hospital.appointmentservice.payload.AppointmentWithPerson;

import java.util.List;

public interface AppointmentService {


    void save(Appointment appointment);

    void delete(Long id);

    List<AppointmentWithPerson> geAppointmentByDoctor(Long id);

    List<AppointmentWithDoctor> geAppointmentByUser(Long id);
}
