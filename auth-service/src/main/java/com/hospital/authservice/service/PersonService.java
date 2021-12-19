package com.hospital.authservice.service;


import com.hospital.authservice.model.Person;
import com.hospital.authservice.repository.PersonRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PersonService {

    private final PersonRepository personRepository;

    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    public Person findByEmail(String email){

        return personRepository.findByEmail(email);
    }

    public Person save(Person person){
        person.setPassword(bCryptPasswordEncoder.encode(person.getPassword()));
        return personRepository.save(person);
    }
}
