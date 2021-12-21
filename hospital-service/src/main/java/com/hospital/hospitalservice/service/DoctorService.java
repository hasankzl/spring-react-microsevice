package com.hospital.hospitalservice.service;

import com.hospital.hospitalservice.model.Doctor;

import java.util.List;

public interface DoctorService {


    Doctor save(Doctor doctor);

    void delete(Long id);

    List<Doctor> findAll();


}
