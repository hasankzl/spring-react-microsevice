package com.hospital.appointmentservice.service;

import com.hospital.appointmentservice.model.Appointment;
import com.hospital.appointmentservice.payload.AppointmentWithDoctor;
import com.hospital.appointmentservice.payload.AppointmentWithPerson;
import com.hospital.appointmentservice.payload.SimpleAppointment;
import com.hospital.appointmentservice.projection.AppointmentProjection;

import java.text.ParseException;
import java.util.List;

public interface AppointmentService {


    void save(Appointment appointment);

    void delete(Long id);

    List<AppointmentWithPerson> getTodayAppointmentWithUserByDoctor(Long id) throws ParseException;

    List<AppointmentWithDoctor> getAppointmentByUser(Long id);

    List<AppointmentProjection> getAppointmentByDoctor(Long id);

    List<AppointmentWithPerson> getWeekAppointmentWithUserByDoctor(Long id) throws ParseException;

}
