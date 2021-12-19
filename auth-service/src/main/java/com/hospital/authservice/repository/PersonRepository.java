package com.hospital.authservice.repository;

import com.hospital.authservice.model.Person;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonRepository extends JpaRepository<Person,Long> {

    Person findByEmail(String email);

}
