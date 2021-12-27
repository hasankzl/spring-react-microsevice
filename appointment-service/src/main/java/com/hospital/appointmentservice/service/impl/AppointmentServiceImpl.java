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
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(appointment.getAppointmentStartDate());
        calendar.add(Calendar.MINUTE, 15);
        Date dateAfter15min = calendar.getTime();

        Calendar calendarStart = Calendar.getInstance();
        calendarStart.setTime(appointment.getAppointmentStartDate());
        calendarStart.add(Calendar.SECOND, 5);
        // added 5 sec to start date
        Date startDate = calendarStart.getTime();

        // check the date between 15 min
        Appointment sameAppointmentDate = appointmentRepository.findByAppointmentEndDateBetween(startDate,dateAfter15min);

        if(sameAppointmentDate !=null) {
            return;
        }

        appointment.setAppointmentEndDate(calendar.getTime());
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
