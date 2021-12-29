package com.hospital.appointmentservice.service.impl;

import com.hospital.appointmentservice.model.Appointment;
import com.hospital.appointmentservice.payload.AppointmentWithDoctor;
import com.hospital.appointmentservice.payload.Doctor;
import com.hospital.appointmentservice.projection.AppointmentProjection;
import com.hospital.appointmentservice.repository.AppointmentRepository;
import com.hospital.appointmentservice.service.AppointmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;


@Service
@RequiredArgsConstructor
public class AppointmentServiceImpl implements AppointmentService {


    private final AppointmentRepository appointmentRepository;

    private final WebClient.Builder webClientBuilder;
    @Override
    public void save(Appointment appointment) {

        appointmentRepository.save(appointment);
    }

    @Override
    public void delete(Long id) {

        appointmentRepository.deleteById(id);

    }

    @Override
    public List<AppointmentProjection> geAppointmentByDoctor(Long id) {

        return appointmentRepository.findByDoctorId(id);
    }

    @Override
    public List<AppointmentWithDoctor> geAppointmentByUser(Long id) {

        List<Appointment> appointmentList =appointmentRepository.findByUserId(id);
        List<AppointmentWithDoctor> appointmentWithDoctorList = new ArrayList<>();

        appointmentList.forEach((appointment ->
        {
            AppointmentWithDoctor appointmentWithDoctor = new AppointmentWithDoctor();
            appointmentWithDoctor.setWorkHour(appointment.getWorkHour());
            appointmentWithDoctor.setAppointmentMinute(appointment.getAppointmentMinute());
            Doctor doctor =
                    webClientBuilder.build()
                    .get()
                    .uri("http://HOSPITAL-SERVICE/hospital/doctor/findById/"+appointment.getDoctorId())
                    .retrieve()
                    .bodyToMono(Doctor.class)
                    .block();
            appointmentWithDoctor.setDoctor(doctor);
            appointmentWithDoctorList.add(appointmentWithDoctor);
        }));


        return appointmentWithDoctorList;
    }
}
