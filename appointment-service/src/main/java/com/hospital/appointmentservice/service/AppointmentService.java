package com.hospital.appointmentservice.service;

import com.hospital.appointmentservice.model.Appointment;

import java.util.List;

public interface AppointmentService {


    void save(Appointment appointment);

    void delete(Long id);

    List<Appointment> geAppointmentByDoctor(Long id);

    List<Appointment> geAppointmentByUser(Long id);
}
