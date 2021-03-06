package com.hospital.hospitalservice.repository;

import com.hospital.hospitalservice.model.Doctor;
import com.hospital.hospitalservice.projection.DoctorAppointmentProjection;
import com.hospital.hospitalservice.projection.DoctorProjection;
import com.hospital.hospitalservice.projection.SimpleDoctorProjection;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DoctorRepository extends JpaRepository<Doctor,Long> {

    List<DoctorProjection> findAllProjectedBy();
    List<DoctorAppointmentProjection> findByDepartmentId(Long id);
    DoctorProjection findProjectedById(Long id);

    SimpleDoctorProjection findSimpleProjectedById(Long id);
}
