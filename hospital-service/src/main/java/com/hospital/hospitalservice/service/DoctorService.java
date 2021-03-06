package com.hospital.hospitalservice.service;

import com.hospital.hospitalservice.model.Doctor;
import com.hospital.hospitalservice.payload.DoctorWithAppointment;
import com.hospital.hospitalservice.projection.DoctorAppointmentProjection;
import com.hospital.hospitalservice.projection.DoctorProjection;
import com.hospital.hospitalservice.projection.SimpleDoctorProjection;

import java.util.List;

public interface DoctorService {


    void  save(Doctor doctor);

    void delete(Long id);

    List<DoctorProjection> findAll();

    DoctorProjection findById(Long id);
    List<DoctorAppointmentProjection> findAllAppointmentProjection(Long id);

    DoctorWithAppointment getDoctorWithAppointment(Long id);

    SimpleDoctorProjection findByIdSimple(Long id);

    void setImage(Long id, String imgName);
}
