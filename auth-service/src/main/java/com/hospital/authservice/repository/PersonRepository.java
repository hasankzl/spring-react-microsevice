package com.hospital.authservice.repository;

import com.hospital.authservice.model.Person;
import com.hospital.authservice.projection.PersonProjection;
import com.hospital.authservice.projection.SimplePersonProjection;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PersonRepository extends JpaRepository<Person,Long> {

    Person findByEmail(String email);

    List<SimplePersonProjection> findAllProjectedSimpleBy();

    List<PersonProjection> findAllProjectedBy();

}
