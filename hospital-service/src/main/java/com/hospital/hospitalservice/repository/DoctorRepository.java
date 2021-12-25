package com.hospital.hospitalservice.repository;

import com.hospital.hospitalservice.model.Doctor;
import com.hospital.hospitalservice.projection.DoctorProjection;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DoctorRepository extends JpaRepository<Doctor,Long> {

    List<DoctorProjection> findAllProjectedBy();


}
