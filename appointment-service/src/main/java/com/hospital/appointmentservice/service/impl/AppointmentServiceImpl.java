package com.hospital.appointmentservice.service.impl;

import com.hospital.appointmentservice.model.Appointment;
import com.hospital.appointmentservice.payload.AppointmentWithDoctor;
import com.hospital.appointmentservice.payload.AppointmentWithPerson;
import com.hospital.appointmentservice.payload.Doctor;
import com.hospital.appointmentservice.payload.Person;
import com.hospital.appointmentservice.projection.AppointmentProjection;
import com.hospital.appointmentservice.repository.AppointmentRepository;
import com.hospital.appointmentservice.service.AppointmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
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
    public List<AppointmentWithPerson> geAppointmentWithPersonByDoctor(Long id) throws ParseException {

        // get today
        SimpleDateFormat sf = new SimpleDateFormat("yyyy-MM-dd");
        Date dt = sf.parse(sf.format(new Date()));

        List<Appointment> appointmentList= appointmentRepository.findByDoctorIdAndAppointmentDayEquals(id,dt);

        List<AppointmentWithPerson> appointmentWithPersonList= new ArrayList<>();

            appointmentList.forEach(appointment -> {
            AppointmentWithPerson appointmentWithPerson = new AppointmentWithPerson();
            appointmentWithPerson.setId(appointment.getId());
            appointmentWithPerson.setAppointmentMinute(appointment.getAppointmentMinute());
            appointmentWithPerson.setWorkHour(appointment.getWorkHour());
            appointmentWithPerson.setAppointmentDay(appointment.getAppointmentDay());
            Person person =
                    webClientBuilder.build()
                            .get()
                            .uri("http://AUTH-SERVICE/auth/findPersonById/"+appointment.getUserId())
                            .retrieve()
                            .bodyToMono(Person.class)
                            .block();

            appointmentWithPerson.setPerson(person);
            appointmentWithPersonList.add(appointmentWithPerson);

        });

        return appointmentWithPersonList;

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
            appointmentWithDoctor.setAppointmentDay(appointment.getAppointmentDay());
            appointmentWithDoctor.setId(appointment.getId());
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

    @Override
    public List<AppointmentProjection> getAppointmentByDoctor(Long id) {
        return appointmentRepository.findProjectedByDoctorId(id);
    }


}
