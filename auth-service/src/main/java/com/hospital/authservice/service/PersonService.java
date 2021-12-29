package com.hospital.authservice.service;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.hospital.authservice.model.AppointmentWithDoctor;
import com.hospital.authservice.model.Person;
import com.hospital.authservice.model.UserWithAppointment;
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

    public UserWithAppointment getUserWithAppointment(Long userId){

        UserWithAppointment userWithAppointment = new UserWithAppointment();
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

        userWithAppointment.setAppointmentList(appointmentWithDoctorList);
        Person person = findById(userId);
        person.setPassword("");
        userWithAppointment.setPerson(person);
        return userWithAppointment;
    }
}
