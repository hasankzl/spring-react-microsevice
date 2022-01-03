package com.hospital.authservice.service;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.hospital.authservice.model.*;
import com.hospital.authservice.projection.PersonProjection;
import com.hospital.authservice.projection.SimplePersonProjection;
import com.hospital.authservice.repository.PersonRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PersonService {

    private final PersonRepository personRepository;

    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    private final WebClient.Builder webClientBuilder;
    public Person findByEmail(String email){

        return personRepository.findByEmail(email);
    }

    public Person save(Person person){
        person.setPassword(bCryptPasswordEncoder.encode(person.getPassword()));
        return personRepository.save(person);
    }

    public Person findById(Long id){
        return personRepository.findById(id).get();
    }

    public PersonWithAppointment getUserWithAppointment(Long userId){

        PersonWithAppointment personWithAppointment = new PersonWithAppointment();
        Mono<Object[]> response =webClientBuilder.build()
                .get()
                .uri("http://APPOINTMENT-SERVICE/appointment/getAppointmentByUser/"+userId)
                .retrieve()
                .bodyToMono(Object[].class).log();
        Object[] objects = response.block();

        ObjectMapper mapper = new ObjectMapper();

        List<AppointmentWithDoctor> appointmentWithDoctorList = Arrays.stream(objects)
                .map(object -> mapper.convertValue(object,AppointmentWithDoctor.class))
                .collect(Collectors.toList());

        personWithAppointment.setAppointmentList(appointmentWithDoctorList);
        Person person = findById(userId);
        person.setPassword("");
        personWithAppointment.setPerson(person);
        return personWithAppointment;
    }

    public void setUserAsDoctor(Long userId,Long doctorId){

        Person person = findById(userId);

        person.setRole("doctor");
        person.setDoctorId(doctorId);

        personRepository.save(person);
    }

    public List<SimplePersonProjection> findAllSimple(){


        return personRepository.findAllProjectedSimpleBy();
    }

    public List<PersonWithDoctor> findAll(){
        List<Person>  personList =personRepository.findAll();

        List<PersonWithDoctor> personWithDoctorList = new ArrayList<>();

        personList.forEach(person -> {
            PersonWithDoctor personWithDoctor = new PersonWithDoctor();
            person.setPassword("");
            personWithDoctor.setPerson(person);

            if(person.getDoctorId() !=null){

                Doctor doctor =webClientBuilder.build()
                        .get()
                        .uri("http://HOSPITAL-SERVICE/hospital/doctor/findById/"+person.getDoctorId())
                        .retrieve()
                        .bodyToMono(Doctor.class).block();
                personWithDoctor.setDoctor(doctor);
            }

            personWithDoctorList.add(personWithDoctor);
        });


        return personWithDoctorList;

    }



    public void deleteById(Long id){
        personRepository.deleteById(id);
    }
}
