package com.hospital.appointmentservice.service.impl;

import com.hospital.appointmentservice.model.Appointment;
import com.hospital.appointmentservice.repository.AppointmentRepository;
import com.hospital.appointmentservice.service.AppointmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Calendar;
import java.util.Date;
import java.util.List;


@Service
@RequiredArgsConstructor
public class AppointmentServiceImpl implements AppointmentService {


    private final AppointmentRepository appointmentRepository;

    @Override
    public void save(Appointment appointment) {

        appointmentRepository.save(appointment);
    }

    @Override
    public void delete(Long id) {

        appointmentRepository.deleteById(id);

    }

    @Override
    public List<Appointment> geAppointmentByDoctor(Long id) {
        return appointmentRepository.findByDoctorId(id);
    }

    @Override
    public List<Appointment> geAppointmentByUser(Long id) {
        return appointmentRepository.findByUserId(id);
    }
}
