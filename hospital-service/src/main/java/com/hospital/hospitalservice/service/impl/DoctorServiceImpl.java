package com.hospital.hospitalservice.service.impl;

import com.hospital.hospitalservice.model.Doctor;
import com.hospital.hospitalservice.projection.DoctorAppointmentProjection;
import com.hospital.hospitalservice.projection.DoctorProjection;
import com.hospital.hospitalservice.repository.DoctorRepository;
import com.hospital.hospitalservice.service.DoctorService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DoctorServiceImpl  implements DoctorService {

    private final DoctorRepository doctorRepository;

    @Override
    public void save(Doctor doctor) {
        doctorRepository.save(doctor);
    }

    @Override
    public void  delete(Long id) {
         doctorRepository.deleteById(id);
    }

    @Override
    public List<DoctorProjection> findAll() {
        return doctorRepository.findAllProjectedBy();
    }

    @Override
    public DoctorProjection findById(Long id) {
        return doctorRepository.findProjectedById(id);
    }

    @Override
    public List<DoctorAppointmentProjection> findAllAppointmentProjection(Long id) {
        return doctorRepository.findByDepartmentId(id);
    }
}
