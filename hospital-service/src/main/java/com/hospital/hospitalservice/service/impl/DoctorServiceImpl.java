package com.hospital.hospitalservice.service.impl;

import com.hospital.hospitalservice.model.Doctor;
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
    public Doctor save(Doctor doctor) {
        return doctorRepository.save(doctor);
    }

    @Override
    public void  delete(Long id) {
         doctorRepository.deleteById(id);
    }

    @Override
    public List<Doctor> findAll() {
        return doctorRepository.findAll();
    }
}
