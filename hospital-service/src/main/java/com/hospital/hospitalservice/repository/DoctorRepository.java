package com.hospital.hospitalservice.repository;

import com.hospital.hospitalservice.model.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DoctorRepository extends JpaRepository<Doctor,Long> {
}
