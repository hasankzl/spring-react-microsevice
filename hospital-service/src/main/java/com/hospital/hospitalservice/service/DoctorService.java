package com.hospital.hospitalservice.service;

import com.hospital.hospitalservice.model.Doctor;
import com.hospital.hospitalservice.projection.DoctorAppointmentProjection;
import com.hospital.hospitalservice.projection.DoctorProjection;

import java.util.List;

public interface DoctorService {


    void  save(Doctor doctor);

    void delete(Long id);

    List<DoctorProjection> findAll();

    DoctorProjection findById(Long id);
    List<DoctorAppointmentProjection> findAllAppointmentProjection(Long id);
}
