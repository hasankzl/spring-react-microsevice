package com.hospital.hospitalservice.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.hospital.hospitalservice.model.Doctor;
import com.hospital.hospitalservice.payload.AppointmentWithPerson;
import com.hospital.hospitalservice.payload.DoctorWithAppointment;
import com.hospital.hospitalservice.projection.DoctorAppointmentProjection;
import com.hospital.hospitalservice.projection.DoctorProjection;
import com.hospital.hospitalservice.projection.SimpleDoctorProjection;
import com.hospital.hospitalservice.repository.DoctorRepository;
import com.hospital.hospitalservice.service.DoctorService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class DoctorServiceImpl  implements DoctorService {


    private final WebClient.Builder webClientBuilder;

    private final DoctorRepository doctorRepository;

    @Override
    public void save(Doctor doctor) {
        doctorRepository.save(doctor);
    }

    @Override
    public void  delete(Long id) {
         doctorRepository.deleteById(id);
    }

    @Override
    public List<DoctorProjection> findAll() {
        return doctorRepository.findAllProjectedBy();
    }

    @Override
    public DoctorProjection findById(Long id) {
        return doctorRepository.findProjectedById(id);
    }

    @Override
    public List<DoctorAppointmentProjection> findAllAppointmentProjection(Long id) {
        return doctorRepository.findByDepartmentId(id);
    }

    @Override
    public DoctorWithAppointment getDoctorWithAppointment(Long id) {

       DoctorWithAppointment doctorWithAppointment = new DoctorWithAppointment();

        DoctorProjection doctorProjection = findById(id);

        doctorWithAppointment.setDoctor(doctorProjection);


        Mono<Object[]> response =webClientBuilder.build()
                .get()
                .uri("http://APPOINTMENT-SERVICE/appointment/getTodayAppointmentWithUserByDoctor/"+id)
                .retrieve()
                .bodyToMono(Object[].class).log();
        Object[] objects = response.block();

        ObjectMapper mapper = new ObjectMapper();

        List<AppointmentWithPerson> appointmentWithDoctorList = Arrays.stream(objects)
                .map(object -> mapper.convertValue(object,AppointmentWithPerson.class))
                .collect(Collectors.toList());

        doctorWithAppointment.setAppointmentList(appointmentWithDoctorList);
        return doctorWithAppointment;
    }

    @Override
    public SimpleDoctorProjection findByIdSimple(Long id) {
        return doctorRepository.findSimpleProjectedById(id);
    }

    @Override
    public void setImage(Long id, String imgName) {
        Doctor doctor = doctorRepository.findById(id).get();

        doctor.setImg(imgName);

        doctorRepository.save(doctor);
    }
}
